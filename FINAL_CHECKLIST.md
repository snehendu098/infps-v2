# ✅ CMS Integration - Final Checklist

## Before You Start

- [ ] You have a Sanity account (https://www.sanity.io)
- [ ] You have created a Sanity project and copied the Project ID
- [ ] You have Sanity CLI installed (`npm install -g @sanity/cli`)

---

## Configuration Checklist

### 1. Update Sanity Studio

- [ ] Open `~/Desktop/projects/infps-studio/sanity.config.ts`
- [ ] Line 10: Replace `'YOUR_PROJECT_ID_HERE'` with your actual Project ID
- [ ] Open `~/Desktop/projects/infps-studio/sanity.cli.ts`
- [ ] Line 5: Replace `'YOUR_PROJECT_ID_HERE'` with your actual Project ID

### 2. Update Main App

- [ ] Open `~/Desktop/projects/infps/.env.local`
- [ ] Line 3: Replace `your_project_id_here` with your actual Project ID

### 3. Install Dependencies

- [ ] Run: `cd ~/Desktop/projects/infps-studio && npm install`
- [ ] Verify: No errors during installation

---

## Testing Checklist

### 4. Start Sanity Studio

- [ ] Run: `cd ~/Desktop/projects/infps-studio && npm run dev`
- [ ] Visit: http://localhost:3333
- [ ] You see the Sanity Studio login screen
- [ ] You can log in successfully

### 5. Create Test Content

- [ ] Click "Pages" in the sidebar
- [ ] Click "Create" button
- [ ] Fill in:
  - [ ] Title: "Test Page"
  - [ ] Click "Generate" for slug (creates: "test-page")
- [ ] Add a Section:
  - [ ] Click "Add item" under Sections
  - [ ] Add a Column (width: 1/1)
  - [ ] Add a Text Widget
  - [ ] Add some text content
- [ ] Click "Publish"
- [ ] You see "Published" status

### 6. Test in Next.js App

- [ ] Run: `cd ~/Desktop/projects/infps && npm run dev`
- [ ] Visit: http://localhost:3000/cms/test-page
- [ ] You see your content from Sanity
- [ ] No errors in browser console
- [ ] No errors in terminal

### 7. Verify Existing Pages Still Work

- [ ] Visit: http://localhost:3000 (Home page)
- [ ] Visit: http://localhost:3000/about
- [ ] Visit: http://localhost:3000/services
- [ ] All pages load correctly
- [ ] Mobile menu works
- [ ] Footer displays correctly

---

## Feature Testing

### 8. Test Different Widgets

- [ ] Create a new page in Sanity
- [ ] Add Text Widget with rich text (bold, headings, links)
- [ ] Add Image Widget and upload an image
- [ ] Add Button Widget with a link
- [ ] Add Spacer Widget
- [ ] Publish and view on frontend
- [ ] All widgets render correctly

### 9. Test Layouts

- [ ] Create a page with 2 columns (1/2 + 1/2)
- [ ] Create a page with 3 columns (1/3 + 1/3 + 1/3)
- [ ] Create a page with asymmetric columns (1/3 + 2/3)
- [ ] Test on mobile (columns should stack)

### 10. Test Backgrounds

- [ ] Create section with color background
- [ ] Create section with image background
- [ ] Backgrounds display correctly

### 11. Test SEO

- [ ] Edit a page in Sanity
- [ ] Add SEO meta title and description
- [ ] View page source in browser
- [ ] Verify meta tags are present in `<head>`

---

## Production Readiness

### 12. Deploy Sanity Studio

- [ ] Run: `cd ~/Desktop/projects/infps-studio && npm run deploy`
- [ ] Note your studio URL (e.g., `https://your-project.sanity.studio`)
- [ ] You can access studio from this URL
- [ ] You can create/edit content from production studio

### 13. Deploy Next.js App

- [ ] Add Sanity Project ID to Vercel environment variables
- [ ] Push code to GitHub
- [ ] Vercel deploys successfully
- [ ] CMS pages work in production

---

## Troubleshooting Verification

### If Something Doesn't Work:

**Sanity Studio won't start:**
- [ ] Checked that `npm install` ran successfully in studio directory
- [ ] Verified Project ID is correct in both config files
- [ ] Logged in via `sanity login`

**Next.js shows "Project ID undefined":**
- [ ] Verified `.env.local` has correct Project ID
- [ ] Restarted Next.js dev server (`npm run dev`)

**Images don't load:**
- [ ] Verified `cdn.sanity.io` is in `next.config.mjs` (it should be)
- [ ] Checked browser console for errors

**CMS page shows 404:**
- [ ] Verified content is published in Sanity (not draft)
- [ ] Slug matches URL (e.g., slug "test-page" → `/cms/test-page`)

---

## Success Criteria

You've successfully integrated the CMS when:

✅ Sanity Studio loads at http://localhost:3333
✅ You can create and publish pages
✅ CMS pages display at `/cms/[slug]`
✅ All widgets render correctly
✅ SEO metadata works
✅ Mobile responsive
✅ Existing pages still work
✅ No console errors

---

## Next Steps

After everything works:

1. **Content Creation**
   - Create real pages for your site
   - Build complex layouts with multiple sections
   - Add rich media (images, buttons, etc.)

2. **Customization**
   - Add more widget types (video, gallery, etc.)
   - Customize styling in widget components
   - Add more background options

3. **Advanced Features**
   - Set up draft preview
   - Add global reusable sections
   - Create custom components

4. **Production**
   - Deploy studio to Sanity cloud
   - Deploy Next.js to Vercel
   - Set up webhooks for auto-revalidation

---

**Status**: Ready for launch! 🚀

All systems operational. Start creating content!
