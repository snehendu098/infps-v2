# InfiniTech Partners - CMS Guide

## Overview

This website now includes a **custom Content Management System (CMS)** that allows you to:
- Create and manage **festive popups** and special offers
- Update **site settings** (title, description, contact info)
- Change **text content** and images across the website
- Schedule **time-based announcements**

## Accessing the CMS

1. Navigate to: `http://localhost:3001/admin/cms` (or your production URL + `/admin/cms`)
2. **Default Password**: `admin123`
   - **IMPORTANT**: Change this in production! Edit `/app/admin/cms/page.tsx` line 31

## Features

### 1. Festive Popups & Announcements

Create beautiful popups for:
- **Festive wishes** (Diwali, Christmas, New Year, etc.)
- **Special offers** and promotions
- **Important announcements**
- **Alerts** and notifications

#### How to Create a Popup:

1. Go to **Admin Panel** → **Popups & Announcements** tab
2. Click **"Add New Popup"**
3. Fill in the details:
   - **Title**: Main heading (e.g., "Happy Diwali 2024!")
   - **Message**: Your message or offer details
   - **Type**: Choose from Festive, Offer, Announcement, or Alert
   - **Start Date**: When the popup should start showing
   - **End Date**: When it should stop showing
   - **CTA Button Text**: Call-to-action button text (optional)
   - **CTA Link**: Where the button should link (optional)
   - **Background Color**: Custom background color
   - **Text Color**: Custom text color

4. Click **"Save Popup"**
5. Toggle the **eye icon** to activate/deactivate
6. Click **"Save All Changes"** at the top

#### Popup Behavior:

- Popups show **1 second** after page load
- Each popup is dismissed for **24 hours** per user
- Only **active** popups within their date range are shown
- Users can close popups with the X button

### 2. Site Settings

Update global site information:
- **Site Title**: Main website title
- **Site Description**: SEO description
- **Contact Email**: Business email address
- **Phone**: Contact number
- **Address**: Business address
- **Social Media**: LinkedIn, Twitter, etc.

### 3. Content Storage

The CMS currently uses **localStorage** for development. For production:

#### Option A: Keep localStorage (Simple)
- Good for small sites
- No database needed
- Data persists in browser

#### Option B: Add Database (Recommended for Production)

Replace the storage in `/lib/cms/data.ts`:

```typescript
// Replace getCMSContent with:
export const getCMSContent = async (): Promise<CMSContent> => {
  const response = await fetch('/api/cms/content');
  return response.json();
};

// Add API route at /app/api/cms/content/route.ts:
import { NextResponse } from 'next/server';
import { getCMSFromDatabase } from '@/lib/database'; // Your DB logic

export async function GET() {
  const content = await getCMSFromDatabase();
  return NextResponse.json(content);
}
```

### 4. Example: Creating a Diwali Popup

1. Access CMS Admin (`/admin/cms`)
2. Login with password
3. Click "Add New Popup"
4. Fill in:
   ```
   Title: Happy Diwali 2024! 🪔
   Message: Wishing you and your family a prosperous and joyful Diwali. May this festival of lights bring success to all your endeavors!
   Type: Festive
   Start Date: 2024-10-30
   End Date: 2024-11-05
   CTA Text: View Our Services
   CTA Link: /services
   Background Color: #FF6B35 (festive orange)
   Text Color: #FFFFFF (white)
   ```
5. Save and activate
6. Click "Save All Changes"

### 5. Security Notes

**IMPORTANT FOR PRODUCTION:**

1. **Change the default password**:
   - Edit `/app/admin/cms/page.tsx`
   - Line 31: Change `'admin123'` to a secure password
   - Better: Implement proper authentication (NextAuth.js, Clerk, etc.)

2. **Protect the admin route**:
   - Add middleware to `/middleware.ts`:
   ```typescript
   export function middleware(request: NextRequest) {
     if (request.nextUrl.pathname.startsWith('/admin')) {
       // Add your auth check here
     }
   }
   ```

3. **Add HTTPS** in production

4. **Use environment variables** for sensitive data

### 6. Customization

#### Adding More Popup Types:

Edit `/lib/cms/types.ts`:
```typescript
type: 'festive' | 'offer' | 'announcement' | 'alert' | 'your-new-type';
```

#### Styling Popups:

Edit `/components/cms/FestivePopup.tsx` to change:
- Animation timing
- Size and positioning
- Border radius
- Shadow effects

#### Adding Image Upload:

1. Install image upload library (e.g., `uploadthing`, `cloudinary`)
2. Add image field to popup editor
3. Display in `CMSPopup` component

## Technical Details

### File Structure:
```
/lib/cms/
  ├── types.ts          # TypeScript types for CMS
  ├── data.ts           # Data management & storage

/components/cms/
  └── FestivePopup.tsx  # Popup component

/app/admin/cms/
  └── page.tsx          # Admin panel UI
```

### Data Flow:
1. User creates popup in Admin Panel
2. Data saved to localStorage (or your database)
3. `FestivePopup` component checks for active popups
4. Displays matching popups to visitors

## Future Enhancements

Consider adding:
- [ ] Image upload for popup backgrounds
- [ ] Rich text editor for messages
- [ ] A/B testing for popups
- [ ] Analytics (popup views, click-through rates)
- [ ] Multiple language support
- [ ] Email notifications for new popups
- [ ] Scheduled publishing
- [ ] User role management

## Support

For questions or issues:
1. Check this guide first
2. Review code comments in CMS files
3. Test in development before deploying

## Quick Start Checklist

- [ ] Access `/admin/cms`
- [ ] Login with `admin123`
- [ ] Create your first popup
- [ ] Activate it
- [ ] Save changes
- [ ] Test on homepage
- [ ] Change default password for production
- [ ] Add proper authentication
- [ ] Configure database (if needed)
- [ ] Deploy and test in production

---

**Built with ❤️ for InfiniTech Partners**
