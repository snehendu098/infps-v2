import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const slug = searchParams.get('slug')

  // Disable Draft Mode
  draftMode().disable()

  // Redirect to the page
  const redirectUrl = slug ? `/${slug}` : '/'
  redirect(redirectUrl)
}
