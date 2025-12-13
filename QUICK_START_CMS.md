# 🚀 QUICK START GUIDE - CMS Integration

## ✅ Integration Status: COMPLETE

All code has been set up. You just need to:
1. Create a Sanity account
2. Get your Project ID
3. Create content

---

## 📋 Step-by-Step Setup (5-10 minutes)

### 1️⃣ Create Sanity Account & Project

Go to **https://www.sanity.io/** and:

1. Sign up/Login
2. Click **"Create Project"**
3. Project name: **Infinititech CMS**
4. Dataset: **production**
5. **IMPORTANT**: Copy your **Project ID** (looks like: `abc123xyz`)

### 2️⃣ Install & Setup Sanity Studio

```bash
# Install Sanity CLI globally (one-time setup)
npm install -g @sanity/cli

# Login to Sanity
sanity login

# Go to studio directory
cd ~/Desktop/projects/infps-studio

# Install dependencies
npm install

# Update configuration files with your Project ID:
# Edit these files and replace 'YOUR_PROJECT_ID_HERE':
# - sanity.config.ts
# - sanity.cli.ts
```

### 3️⃣ Update Main App Environment Variables

```bash
cd ~/Desktop/projects/infps

# Edit .env.local and update:
NEXT_PUBLIC_SANITY_PROJECT_ID=your_actual_project_id_here
```

### 4️⃣ Start Sanity Studio

```bash
cd ~/Desktop/projects/infps-studio
npm run dev
```

Visit **http://localhost:3333** - You should see the Sanity Studio!

### 5️⃣ Create Your First CMS Page

In Sanity Studio (http://localhost:3333):

1. Click **"Pages"** in the sidebar
2. Click **"Create"** button
3. Fill in:
   - **Title**: "Welcome"
   - Click **"Generate"** next to Slug → will create `welcome`
4. Click **"Add item"** under Sections
5. In the section:
   - Leave Layout as default (Boxed, Medium padding)
   - Click **"Add item"** under Columns
   - Select width: **Full Width (1/1)**
   - Click **"Add item"** under Widgets
   - Select **"Text Widget"**
   - Type some content: "Hello from the CMS!"
6. Click **"Publish"** in the top right

### 6️⃣ View Your CMS Page

```bash
cd ~/Desktop/projects/infps
npm run dev
```

Visit **http://localhost:3000/cms/welcome**

🎉 You should see your CMS content!

---

## 🎨 Creating Content

### Page Structure

```
Page
├── Title & Slug
├── SEO (Meta title, description, OG image)
└── Sections (multiple)
    ├── Layout (Full width or Boxed)
    ├── Padding (Small, Medium, Large)
    ├── Background (Color or Image)
    └── Columns (multiple)
        ├── Width (1/1, 1/2, 1/3, 2/3)
        └── Widgets (multiple)
            ├── Text Widget - Rich text editor
            ├── Image Widget - Upload & display images
            ├── Button Widget - Call-to-action buttons
            └── Spacer Widget - Add vertical spacing
```

### Example: Two-Column Layout

1. Add Section
2. Add Column 1:
   - Width: **1/2** (Half)
   - Add Text Widget with content
3. Add Column 2:
   - Width: **1/2** (Half)
   - Add Image Widget with an image

---

## 📁 Where Everything Is

### Sanity Studio Files
```
~/Desktop/projects/infps-studio/
├── schemas/index.ts         ← All CMS schemas
├── sanity.config.ts         ← Config (update Project ID here)
├── sanity.cli.ts            ← CLI config (update Project ID here)
└── deskStructure.ts         ← Studio layout
```

### Main App Files
```
~/Desktop/projects/infps/
├── app/cms/[slug]/page.tsx  ← CMS route
├── components/cms/          ← All CMS components
├── lib/sanity.*             ← Sanity utilities
└── .env.local               ← Update Project ID here
```

---

## 🔗 URLs

### Development
- **Sanity Studio**: http://localhost:3333
- **Next.js App**: http://localhost:3000
- **CMS Pages**: http://localhost:3000/cms/[your-slug]

### Your Existing Pages (Still Work!)
- http://localhost:3000/ (Home)
- http://localhost:3000/about
- http://localhost:3000/services
- http://localhost:3000/team
- http://localhost:3000/contact

---

## 🚀 Deploy to Production

### Deploy Sanity Studio
```bash
cd ~/Desktop/projects/infps-studio
npm run deploy
```

Your studio will be at: **https://your-project.sanity.studio**

### Deploy Next.js (Vercel)
Your app is already set up. Just push to git and deploy:

```bash
cd ~/Desktop/projects/infps
git add .
git commit -m "Add CMS integration"
git push
```

In Vercel dashboard, add environment variable:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` = your_project_id

---

## 💡 Pro Tips

### Creating Homepage from CMS
If you want your homepage (`/`) to come from CMS:

1. Create a page with slug: `home`
2. Update `app/page.tsx` to fetch and render from Sanity

### Adding More Widget Types
Want video, galleries, forms? Check the full documentation in the earlier response for how to add more widget types.

### Preview Draft Content
Sanity supports draft preview. You can add this feature to preview unpublished changes.

---

## 🆘 Common Issues

**"NEXT_PUBLIC_SANITY_PROJECT_ID is undefined"**
- Update `.env.local` with your Project ID
- Restart `npm run dev` after changing env variables

**"Cannot find module '@sanity/client'"**
- Run `npm install` in the main project directory

**Images not loading**
- ✅ Already fixed - `cdn.sanity.io` is added to `next.config.mjs`

**Studio won't start**
- Make sure you've run `npm install` in `infps-studio`
- Check that Project ID is updated in both config files

---

## 📚 Learn More

- **Sanity Docs**: https://www.sanity.io/docs
- **GROQ Query Language**: https://www.sanity.io/docs/groq
- **Next-Sanity**: https://github.com/sanity-io/next-sanity

---

## ✨ What's Next?

You now have a fully functional CMS! You can:

1. ✅ Create unlimited pages
2. ✅ Build complex layouts with sections and columns
3. ✅ Add text, images, buttons
4. ✅ Control SEO for each page
5. ✅ Keep all your existing pages

**Your CMS is ready to use!** 🎉
