import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

// @ts-ignore - html-to-docx doesn't have types
import HTMLtoDOCX from 'html-to-docx';

export async function GET() {
  try {
    // Read the HTML file
    const htmlPath = join(process.cwd(), 'hrms_doc.html');
    const htmlContent = readFileSync(htmlPath, 'utf-8');

    // Convert HTML to DOCX using html-to-docx
    const docxBuffer = await HTMLtoDOCX(htmlContent, null, {
      table: { row: { cantSplit: true } },
      footer: true,
      pageNumber: true,
      font: 'Calibri',
      fontSize: 11,
      orientation: 'portrait',
      margins: {
        top: 1440,
        right: 1440,
        bottom: 1440,
        left: 1440,
      },
    });

    return new NextResponse(docxBuffer, {
      headers: {
        'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'Content-Disposition': 'attachment; filename="HRMS_Documentation.docx"',
        'Content-Length': docxBuffer.length.toString(),
      },
    });
  } catch (error: any) {
    console.error('Error generating Word document:', error);
    return NextResponse.json(
      { error: 'Failed to generate Word document', details: error.message },
      { status: 500 }
    );
  }
}
