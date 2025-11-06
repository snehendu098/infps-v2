# CMS Cheat Sheet

## 🔗 Quick Links

| Purpose | URL |
|---------|-----|
| **Admin Panel** | http://localhost:3001/admin/cms |
| **Homepage** | http://localhost:3001 |
| **Password** | `admin123` |

## ⚡ Common Tasks

### Create Festive Popup (30 seconds)
1. `/admin/cms` → Login
2. Click "Add New Popup"
3. Fill: Title, Message, Type, Dates
4. Click eye icon to activate
5. "Save All Changes"

### Edit Existing Popup
1. Click pencil icon ✏️
2. Make changes
3. "Save Popup"
4. "Save All Changes"

### Activate/Deactivate
- Click eye icon 👁️
- Green = Active
- Gray = Inactive

### Delete Popup
- Click trash icon 🗑️
- Confirm

## 🎨 Color Presets

```
Diwali/Indian:    BG: #FF6B35, Text: #FFFFFF
Christmas:        BG: #C41E3A, Text: #FFFFFF
New Year:         BG: #212121, Text: #FFD700
Professional:     BG: #1976D2, Text: #FFFFFF
Alert:            BG: #F44336, Text: #FFFFFF
```

## 📝 Popup Template

```
Title: [Event] [Year]! [Emoji]
Message: [Greeting] [Offer/Message]
Type: [festive|offer|announcement|alert]
Start: [YYYY-MM-DD]
End: [YYYY-MM-DD]
CTA Text: [Action Text]
CTA Link: /[page]
BG Color: #[hex]
Text Color: #[hex]
```

## 🚨 Before Production

- [ ] Change password (line 31, `/app/admin/cms/page.tsx`)
- [ ] Test all popups
- [ ] Add authentication
- [ ] Enable HTTPS

## 📁 Key Files

```
/lib/cms/types.ts              - Types
/lib/cms/data.ts               - Data logic
/components/cms/FestivePopup.tsx - Display
/app/admin/cms/page.tsx        - Admin UI
```

## 🐛 Quick Fixes

**Popup not showing?**
- Check activated? (eye icon green)
- Dates valid? (today between start/end)
- Clear localStorage + refresh

**Can't login?**
- Password: `admin123`
- Clear browser cache

**Changes not saved?**
- Click "Save All Changes" at top
- Check console for errors

## 📅 Festive Calendar 2024-2025

| Festival | Dates | Create Popup |
|----------|-------|--------------|
| Diwali 2024 | Oct 31-Nov 3 | Oct 29 |
| Christmas | Dec 24-26 | Dec 22 |
| New Year | Dec 31-Jan 1 | Dec 29 |
| Republic Day | Jan 26 | Jan 24 |
| Holi | Mar 14 | Mar 12 |
| Independence Day | Aug 15 | Aug 13 |

## 🎯 Best Practices

✅ **DO:**
- Test before activating
- Use short, clear messages
- Set end dates
- Use brand colors
- Test on mobile

❌ **DON'T:**
- Multiple active popups
- Spam users
- Miss end dates
- Use tiny text
- Forget to save

## 🔢 Field Limits

| Field | Recommended | Max |
|-------|------------|-----|
| Title | 30 chars | 60 chars |
| Message | 100 chars | 200 chars |
| CTA Text | 15 chars | 30 chars |

## 🎨 Emoji Reference

```
🪔 Diwali
🎄 Christmas
🎆 New Year
💝 Valentine's
🎊 Celebration
💰 Offer
📢 Announcement
⚠️ Alert
🚀 Launch
```

## 💾 Backup Data

```javascript
// Browser Console
localStorage.getItem('cms_content') // View
localStorage.setItem('cms_content', '...') // Restore
```

## 🔐 Default Login

```
URL: /admin/cms
Password: admin123
```

---

**Print this and keep handy! 📌**
