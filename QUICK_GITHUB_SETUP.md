# 🚀 Quick GitHub Pages Setup

## 5-Minute Deployment Guide

### Step 1: Create GitHub Repository
1. Go to [GitHub.com](https://github.com) → "New repository"
2. Name: `badboyz-invoice`
3. Set to **Public**
4. Click "Create repository"

### Step 2: Push Your Code
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/badboyz-invoice.git
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository → **Settings** → **Pages**
2. Source: **GitHub Actions**
3. Save

### Step 4: Get Your URL
Your app will be live at:
```
https://YOUR_USERNAME.github.io/badboyz-invoice/
```

### Step 5: Setup Telegram Bot
1. Update `telegram-bot.js`:
```javascript
const WEB_APP_URL = 'https://YOUR_USERNAME.github.io/badboyz-invoice/';
```

2. Configure @BotFather:
   - `/mybots` → Your bot → Bot Settings → Menu Button
   - Enter your GitHub Pages URL

## 🎉 Done!
Your invoice app is now live and ready for Telegram!
