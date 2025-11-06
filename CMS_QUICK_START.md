# CMS Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Access the CMS Admin Panel
1. Open your browser
2. Navigate to: **http://localhost:3001/admin/cms**
3. Login with password: **admin123**

### Step 2: Create Your First Festive Popup

1. Click **"Add New Popup"** button
2. Fill in the form:

**Example: Diwali Greeting**
```
Title: Happy Diwali 2024! 🪔
Message: Wishing you prosperity and joy this festive season!
Type: Festive
Start Date: Today's date
End Date: 7 days from now
CTA Text: View Our Services
CTA Link: /services
Background Color: #FF6B35 (orange)
Text Color: #FFFFFF (white)
```

3. Click **"Save Popup"**
4. Click the **eye icon** to activate it
5. Click **"Save All Changes"** at the top

### Step 3: Test It!

1. Go to the homepage: **http://localhost:3001**
2. Your popup should appear after 1 second
3. Click the X to close it
4. Refresh - it won't show again for 24 hours (per browser)

## 📝 Creating Different Types of Popups

### Festive Wishes (Diwali, Christmas, etc.)
```
Type: Festive
Background: Festive colors (#FF6B35, #9C27B0, etc.)
Message: Warm greetings and wishes
```

### Special Offers
```
Type: Offer
Background: Bold color (#FF5722)
Message: Limited time discount details
CTA: "Claim Offer Now" → /contact
```

### Announcements
```
Type: Announcement
Background: Professional (#2196F3)
Message: New service launch, company news
CTA: "Learn More" → relevant page
```

### Alerts
```
Type: Alert
Background: Attention-grabbing (#F44336)
Message: Important updates, schedule changes
CTA: Optional
```

## 🎨 Color Combinations That Work

### Festive (Diwali/Indian Festivals)
- Background: `#FF6B35` (Orange)
- Text: `#FFFFFF` (White)

### Christmas
- Background: `#C41E3A` (Christmas Red)
- Text: `#FFFFFF` (White)

### New Year
- Background: `#212121` (Black)
- Text: `#FFD700` (Gold)

### Professional
- Background: `#1976D2` (Blue)
- Text: `#FFFFFF` (White)

### Urgent/Alert
- Background: `#F44336` (Red)
- Text: `#FFFFFF` (White)

## ⚙️ Managing Popups

### To Edit a Popup:
1. Click the **pencil icon** next to any popup
2. Make your changes
3. Click "Save Popup"
4. Click "Save All Changes"

### To Activate/Deactivate:
- Click the **eye icon** to toggle
- Active = Green badge, shows to users
- Inactive = Gray badge, hidden

### To Delete:
- Click the **trash icon**
- Confirm deletion

## 📅 Scheduling Popups

### Show Only During Specific Dates:
```
Start Date: 2024-10-30  (Popup appears from this date)
End Date: 2024-11-05    (Popup stops after this date)
```

Leave dates empty for always-active popups.

## 🔐 Security (IMPORTANT!)

### For Production:
1. **Change the default password!**
   - Open: `/app/admin/cms/page.tsx`
   - Line 31: Replace `'admin123'` with your secure password

2. **Add proper authentication** (NextAuth.js, Clerk, etc.)

3. **Enable HTTPS** on your domain

## 💡 Pro Tips

1. **Preview Before Publishing**
   - Create popup
   - Keep it inactive
   - Test locally
   - Then activate

2. **Don't Spam Users**
   - Limit to 1 active popup at a time
   - Use appropriate date ranges
   - Users dismiss for 24 hours automatically

3. **Mobile-Friendly**
   - Keep titles under 50 characters
   - Messages under 150 characters work best
   - Test on mobile devices

4. **Timing Matters**
   - Start festive popups 1-2 days before
   - End 1-2 days after the festival
   - For offers, create urgency with short windows

## 🐛 Troubleshooting

### Popup Not Showing?
- Check if it's **activated** (eye icon)
- Verify **date range**
- Clear browser cache
- Check browser console for errors

### Can't Login?
- Verify password is `admin123`
- Clear browser storage
- Check `/app/admin/cms/page.tsx` for password

### Changes Not Saving?
- Click "Save All Changes" button at top
- Check browser console for errors
- Verify localStorage is enabled

## 📞 Need Help?

Refer to the full guide: **CMS_GUIDE.md**

---

**Ready to create your first popup? Let's go! 🚀**
