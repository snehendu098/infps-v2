# Complete Page Builder Guide - WordPress/Elementor Style

## 🎯 Overview

You now have a **complete visual page builder** similar to WordPress + Elementor! You can:

✅ Create unlimited pages
✅ Add/edit/delete any section
✅ Drag sections up/down to reorder
✅ Duplicate sections
✅ Edit hero, text, features, services, testimonials, pricing, FAQ, team, stats, CTA sections
✅ Control every aspect of your website
✅ No coding required!

## 🚀 Quick Start

### Access the Page Builder
1. **URL**: http://localhost:3001/admin/page-builder
2. **Password**: `admin123`
3. Start building!

## 📄 Page Management

### Create a New Page
1. Click **"New Page"** in sidebar
2. Enter slug (e.g., `about`, `services`, `pricing`)
3. Page appears in sidebar
4. Click to edit

### Edit Page Details
- **Title**: Click and edit at top
- **Slug**: URL path (e.g., `/about`)
- **Meta Description**: For SEO
- **Published/Draft**: Toggle eye icon

### Delete a Page
- Click trash icon
- Cannot delete homepage

## 🧩 Section Types

### 1. Hero Section
**Best for**: Homepage banner, landing pages

**Fields**:
```json
{
  "heading": "Your Main Heading",
  "subheading": "Optional tagline",
  "description": "Supporting text",
  "backgroundType": "gradient|image|video|particles",
  "backgroundImage": { "src": "/image.jpg", "alt": "description" },
  "buttons": [
    { "text": "Get Started", "link": "/contact", "style": "primary" }
  ],
  "showParticles": true
}
```

**Example Use**: Landing page banner with CTA

---

### 2. Text Section
**Best for**: About content, policy pages

**Fields**:
```json
{
  "heading": "About Us",
  "content": "<p>Your HTML content here</p>",
  "alignment": "left|center|right",
  "backgroundColor": "#FFFFFF",
  "textColor": "#000000"
}
```

**Example Use**: Company history, terms & conditions

---

### 3. Features Section
**Best for**: Product features, benefits

**Fields**:
```json
{
  "heading": "Our Features",
  "subheading": "Why choose us",
  "features": [
    {
      "icon": "⚡",
      "title": "Fast",
      "description": "Lightning fast performance"
    }
  ],
  "layout": "grid|list|carousel",
  "columns": 3
}
```

**Example Use**: Software features, service benefits

---

### 4. Services Section
**Best for**: Service offerings, products

**Fields**:
```json
{
  "heading": "Our Services",
  "subheading": "What we offer",
  "services": [
    {
      "icon": "💻",
      "title": "Web Development",
      "description": "Custom websites",
      "link": "/services/web",
      "image": { "src": "/service.jpg", "alt": "Service" }
    }
  ],
  "layout": "cards|list|accordion"
}
```

**Example Use**: Service catalog, product listing

---

### 5. CTA (Call-to-Action) Section
**Best for**: Conversion points, contact prompts

**Fields**:
```json
{
  "heading": "Ready to Get Started?",
  "description": "Contact us today!",
  "buttons": [
    { "text": "Contact Us", "link": "/contact", "style": "primary" }
  ],
  "backgroundColor": "#FF6B35",
  "textColor": "#FFFFFF",
  "backgroundImage": { "src": "/bg.jpg", "alt": "Background" }
}
```

**Example Use**: End of service pages, conversion points

---

### 6. Testimonials Section
**Best for**: Social proof, reviews

**Fields**:
```json
{
  "heading": "What Our Clients Say",
  "testimonials": [
    {
      "name": "John Doe",
      "role": "CEO",
      "company": "TechCorp",
      "avatar": { "src": "/avatar.jpg", "alt": "John" },
      "quote": "Excellent service!",
      "rating": 5
    }
  ],
  "layout": "carousel|grid|single"
}
```

**Example Use**: Customer reviews, case study quotes

---

### 7. Stats Section
**Best for**: Company metrics, achievements

**Fields**:
```json
{
  "heading": "Our Impact",
  "stats": [
    { "number": "100", "label": "Projects", "suffix": "+" },
    { "number": "50", "label": "Clients", "suffix": "+" }
  ],
  "backgroundColor": "#F5F5F5",
  "animated": true
}
```

**Example Use**: Homepage metrics, about page

---

### 8. FAQ Section
**Best for**: Common questions, support

**Fields**:
```json
{
  "heading": "Frequently Asked Questions",
  "faqs": [
    { "question": "How do I...?", "answer": "You can..." },
    { "question": "What is...?", "answer": "It is..." }
  ],
  "layout": "accordion|grid"
}
```

**Example Use**: Support pages, product FAQs

---

### 9. Team Section
**Best for**: About page, company team

**Fields**:
```json
{
  "heading": "Meet Our Team",
  "subheading": "The people behind our success",
  "members": [
    {
      "name": "Jane Smith",
      "role": "CEO",
      "bio": "10 years experience",
      "image": { "src": "/team/jane.jpg", "alt": "Jane" },
      "social": {
        "linkedin": "https://linkedin.com/in/jane",
        "twitter": "https://twitter.com/jane"
      }
    }
  ],
  "layout": "grid|carousel"
}
```

**Example Use**: About page, leadership page

---

### 10. Pricing Section
**Best for**: Pricing pages, plans

**Fields**:
```json
{
  "heading": "Our Pricing",
  "subheading": "Choose the right plan",
  "plans": [
    {
      "name": "Basic",
      "price": "$99",
      "period": "month",
      "features": ["Feature 1", "Feature 2"],
      "highlighted": false,
      "buttonText": "Get Started",
      "buttonLink": "/contact"
    }
  ]
}
```

**Example Use**: Pricing page, subscription plans

---

### 11. Spacer Section
**Best for**: Adding vertical space

**Fields**:
```json
{
  "height": 60,
  "backgroundColor": "#TRANSPARENT"
}
```

**Example Use**: Between sections for breathing room

---

## ⚙️ Section Operations

### Add a Section
1. Click **"Add New Section"**
2. Choose section type from grid
3. Section appears at bottom
4. Edit content

### Edit a Section
1. Click **pencil icon** ✏️
2. JSON editor opens
3. Edit values
4. Click "Save Changes"

### Reorder Sections
- **Up Arrow** ↑: Move section up
- **Down Arrow** ↓: Move section down
- Changes order instantly

### Duplicate a Section
- Click **copy icon** 📋
- Creates exact copy at bottom
- Edit as needed

### Delete a Section
- Click **trash icon** 🗑️
- Confirm deletion
- Section removed

## 🎨 Styling Tips

### Button Styles
```
"primary": Orange gradient (main CTA)
"secondary": Gray background
"outline": Transparent with border
```

### Colors
- Use hex codes: `#FF6B35`
- Keep contrast for readability
- Test on mobile

### Layouts
```
"grid": Cards in grid
"list": Vertical list
"carousel": Horizontal scroll
"accordion": Expandable items
```

## 📱 Responsive Design

All sections are mobile-responsive:
- **Desktop**: Full width, multi-column
- **Tablet**: 2 columns usually
- **Mobile**: Single column, stacked

## 🔗 Page URLs

### CMS Pages
Built pages are accessible at:
```
http://localhost:3001/cms-page/[slug]

Examples:
/cms-page/about
/cms-page/services
/cms-page/pricing
```

### Homepage
To use CMS for homepage:
1. Create page with slug `/`
2. Sections render on homepage

## 💾 Data Storage

### Current Setup (Development)
- **Storage**: localStorage
- **Location**: Browser only
- **Persistence**: Per browser

### Production Setup
Replace localStorage with database:
```typescript
// In page-builder/page.tsx

// Replace localStorage calls with:
const response = await fetch('/api/pages');
const pages = await response.json();

// Add API routes at /app/api/pages/route.ts
```

## 🎯 Complete Workflow Example

### Creating an "About Us" Page

1. **Access Builder**
   - Go to /admin/page-builder
   - Login

2. **Create Page**
   - Click "New Page"
   - Slug: `about`
   - Title: "About Us"

3. **Add Hero**
   - Click "Add Section" → Hero
   - Edit JSON:
   ```json
   {
     "heading": "About InfiniTech Partners",
     "description": "Your trusted technology partner",
     "backgroundType": "gradient",
     "buttons": [
       { "text": "Contact Us", "link": "/contact", "style": "primary" }
     ]
   }
   ```

4. **Add Text Section**
   - Add Section → Text
   - Edit:
   ```json
   {
     "heading": "Our Story",
     "content": "<p>Founded in 2020...</p>",
     "alignment": "left"
   }
   ```

5. **Add Stats**
   - Add Section → Stats
   - Edit:
   ```json
   {
     "heading": "Our Impact",
     "stats": [
       { "number": "500", "label": "Projects", "suffix": "+" },
       { "number": "200", "label": "Clients", "suffix": "+" }
     ]
   }
   ```

6. **Add Team**
   - Add Section → Team
   - Add team members

7. **Publish**
   - Toggle Published
   - Click "Save Page"

8. **View**
   - Visit: /cms-page/about

## 🔐 Security Notes

### For Production:

1. **Change Password**
   ```typescript
   // File: /app/admin/page-builder/page.tsx
   // Line: if (password === 'admin123')
   // Change to: if (password === 'YOUR_SECURE_PASSWORD')
   ```

2. **Add Authentication**
   - Use NextAuth.js, Clerk, or Auth0
   - Protect `/admin/*` routes
   - Add user roles (admin, editor, viewer)

3. **Database Setup**
   - Move from localStorage
   - Use PostgreSQL, MongoDB, or Supabase
   - Add API routes for CRUD

4. **Image Upload**
   - Integrate Cloudinary, Uploadthing
   - Add image upload UI
   - Store URLs in sections

## 🚀 Advanced Features

### Coming Soon
- [ ] Visual drag-and-drop (not just up/down)
- [ ] Image upload directly in builder
- [ ] Rich text editor for text sections
- [ ] Live preview (split screen)
- [ ] Template library
- [ ] Export/import pages
- [ ] Version history
- [ ] Multi-language support
- [ ] SEO optimizer
- [ ] Performance analyzer

## 📖 Section JSON Reference

### Quick Copy-Paste Templates

**Hero with 2 Buttons**:
```json
{
  "type": "hero",
  "heading": "Transform Your Business",
  "description": "We deliver excellence",
  "backgroundType": "gradient",
  "buttons": [
    { "text": "Get Started", "link": "/contact", "style": "primary" },
    { "text": "Learn More", "link": "/about", "style": "outline" }
  ],
  "showParticles": true
}
```

**3-Column Features**:
```json
{
  "type": "features",
  "heading": "Why Choose Us",
  "features": [
    { "icon": "⚡", "title": "Fast", "description": "Lightning speed" },
    { "icon": "🔒", "title": "Secure", "description": "Bank-level security" },
    { "icon": "💡", "title": "Smart", "description": "AI-powered" }
  ],
  "layout": "grid",
  "columns": 3
}
```

**Simple CTA**:
```json
{
  "type": "cta",
  "heading": "Ready to Start?",
  "description": "Get in touch today!",
  "buttons": [
    { "text": "Contact Us", "link": "/contact", "style": "primary" }
  ],
  "backgroundColor": "#FF6B35",
  "textColor": "#FFFFFF"
}
```

## 🎓 Tutorial Videos (Coming Soon)

1. Creating Your First Page (5 min)
2. Adding Sections (10 min)
3. Styling & Customization (15 min)
4. Publishing & SEO (10 min)

## 📞 Support

### Having Issues?

1. Check this guide first
2. Verify JSON syntax (use jsonlint.com)
3. Clear browser cache
4. Check browser console for errors

### Common Mistakes

❌ Missing comma in JSON
❌ Wrong quote types (" not ')
❌ Forgetting to save page
❌ Page not published
❌ Wrong slug format

✅ Use JSON validator
✅ Double-check syntax
✅ Always save after editing
✅ Toggle published on
✅ Slug starts with /

---

## 🎉 You're Ready!

You now have full control over your website, just like WordPress + Elementor. Start building beautiful pages!

**Next Steps**:
1. Create your first page
2. Add some sections
3. Publish and view
4. Customize to your needs

Happy building! 🚀
