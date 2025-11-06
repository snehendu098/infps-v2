# Page Builder Cheat Sheet

## 🔗 Quick Access

| Item | URL |
|------|-----|
| **Page Builder** | http://localhost:3001/admin/page-builder |
| **Popup Manager** | http://localhost:3001/admin/cms |
| **Password** | `admin123` |

## ⚡ Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Save Page | Ctrl/Cmd + S (in editor) |
| New Page | Click sidebar button |
| Edit Section | Click pencil ✏️ |
| Delete Section | Click trash 🗑️ |

## 🧩 Section Types at a Glance

| Section | Best For | Icon |
|---------|----------|------|
| **Hero** | Landing banner | 🏠 |
| **Text** | Content blocks | 📝 |
| **Features** | Product features | ⭐ |
| **Services** | Service listings | 💼 |
| **CTA** | Call-to-action | 📣 |
| **Testimonials** | Reviews | 💬 |
| **Stats** | Numbers/metrics | 📊 |
| **FAQ** | Q&A | ❓ |
| **Team** | Staff profiles | 👥 |
| **Pricing** | Plans/pricing | 💰 |
| **Spacer** | Vertical space | ⬜ |

## 📋 Quick Templates

### Minimal Hero
```json
{
  "type": "hero",
  "heading": "Welcome",
  "description": "Your description",
  "backgroundType": "gradient",
  "buttons": [{"text": "Start", "link": "/", "style": "primary"}],
  "showParticles": false
}
```

### Simple Features (3)
```json
{
  "type": "features",
  "heading": "Features",
  "features": [
    {"icon": "⚡", "title": "Fast", "description": "Quick"},
    {"icon": "🔒", "title": "Secure", "description": "Safe"},
    {"icon": "💡", "title": "Smart", "description": "Intelligent"}
  ],
  "layout": "grid",
  "columns": 3
}
```

### Quick CTA
```json
{
  "type": "cta",
  "heading": "Get Started Today",
  "description": "Join us now!",
  "buttons": [{"text": "Sign Up", "link": "/contact", "style": "primary"}],
  "backgroundColor": "#FF6B35",
  "textColor": "#FFFFFF"
}
```

### Stats (4 items)
```json
{
  "type": "stats",
  "stats": [
    {"number": "100", "label": "Projects", "suffix": "+"},
    {"number": "50", "label": "Clients", "suffix": "+"},
    {"number": "10", "label": "Years", "suffix": "+"},
    {"number": "24", "label": "Support", "suffix": "/7"}
  ],
  "animated": true
}
```

## 🎨 Color Palette

```
Primary Orange: #FF6B35
Secondary Orange: #FF9966
White: #FFFFFF
Black: #000000
Gray Background: #F5F5F5
Dark Gray: #333333
```

## 🔄 Common Workflows

### Create New Page (30 sec)
1. Click "New Page"
2. Enter slug (e.g., `about`)
3. Add sections
4. Toggle Published
5. Save

### Duplicate Section (10 sec)
1. Find section
2. Click copy icon 📋
3. Edit duplicate
4. Save page

### Reorder Sections (5 sec)
1. Click ↑ or ↓ arrows
2. Section moves
3. Auto-saved order

### Edit Section Content (1 min)
1. Click pencil ✏️
2. Edit JSON
3. Click "Save Changes"
4. Click "Save Page"

## 🐛 Quick Fixes

| Problem | Solution |
|---------|----------|
| Page not showing | Check Published toggle |
| Section broken | Validate JSON syntax |
| Changes not saving | Click "Save Page" button |
| 404 error | Verify slug format |
| Styles wrong | Check color hex codes |

## 📱 Test Checklist

- [ ] Desktop view
- [ ] Tablet view (768px)
- [ ] Mobile view (375px)
- [ ] All buttons work
- [ ] Images load
- [ ] Text readable
- [ ] Colors correct

## 🚀 Launch Checklist

- [ ] All pages created
- [ ] Content proofread
- [ ] SEO meta filled
- [ ] Pages published
- [ ] Links tested
- [ ] Change admin password
- [ ] Add real authentication
- [ ] Connect database
- [ ] Test on production

## 📊 Section Fields Reference

### Hero
```
heading, subheading, description
backgroundType, backgroundImage
buttons[], showParticles
```

### Features
```
heading, subheading
features[icon, title, description]
layout, columns
```

### Services
```
heading, subheading
services[icon, title, description, link, image]
layout
```

### CTA
```
heading, description
buttons[], backgroundColor, textColor
backgroundImage
```

### Testimonials
```
heading
testimonials[name, role, company, quote, rating, avatar]
layout
```

### Stats
```
heading
stats[number, label, prefix, suffix]
backgroundColor, animated
```

### Pricing
```
heading, subheading
plans[name, price, period, features[], highlighted, buttonText, buttonLink]
```

## 🎯 Button Styles

| Style | Appearance | Use For |
|-------|------------|---------|
| `primary` | Orange gradient | Main CTA |
| `secondary` | Gray solid | Secondary action |
| `outline` | Transparent border | Tertiary action |

## 💡 Pro Tips

✅ Use spacers between sections
✅ Keep headings under 60 chars
✅ Test mobile first
✅ Use consistent colors
✅ Add alt text to images
✅ Fill meta descriptions
✅ Use icons/emojis sparingly
✅ Button text: 2-3 words max

❌ Don't use too many colors
❌ Don't skip meta descriptions
❌ Don't forget to publish
❌ Don't use huge images
❌ Don't have 10+ sections per page

## 📏 Recommended Sizes

```
Section Spacing: 60-80px
Heading Font: 48-72px (desktop)
Body Text: 16-18px
Button Padding: 16px 32px
Image Max Width: 1920px
Column Count: 2-4
```

## 🔗 URL Structure

```
Homepage: /
CMS Pages: /cms-page/[slug]
Admin Panel: /admin/page-builder
Popup Manager: /admin/cms
```

## 💾 Backup Data

```javascript
// Browser Console

// Export all pages
copy(localStorage.getItem('cms_pages'))

// Import pages
localStorage.setItem('cms_pages', '[paste JSON here]')
```

## 🎨 Layout Options

```
grid: Cards in grid layout
list: Vertical list
carousel: Horizontal scroll
accordion: Expandable items
cards: Card-style layout
single: One item centered
```

---

**Print and keep nearby! 📌**

**Need more help?** See PAGE_BUILDER_GUIDE.md
