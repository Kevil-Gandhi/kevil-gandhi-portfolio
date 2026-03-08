# 🚀 Quick Deployment Guide

## Your portfolio is ready! Here's how to deploy it:

### 1. Initialize Git Repository (if not already done)
```bash
cd portfolio-site
git init
git add .
git commit -m "Initial commit: Modern portfolio website"
```

### 2. Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `Kevil-Gandhi.github.io` (or any name)
3. Make it public
4. Don't initialize with README
5. Click "Create repository"

### 3. Push to GitHub
```bash
git remote add origin https://github.com/Kevil-Gandhi/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

### 4. Deploy to GitHub Pages
```bash
npm run deploy
```

This command will:
- Build your project
- Create a `gh-pages` branch
- Deploy to GitHub Pages

### 5. Configure GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**
5. Your site will be live at: `https://Kevil-Gandhi.github.io/YOUR-REPO-NAME/`

### 6. Connect Custom Domain (kevilgandhi.me)

#### A. In GitHub:
1. Go to **Settings** → **Pages**
2. Under **Custom domain**, enter: `kevilgandhi.me`
3. Click **Save**
4. Wait for DNS check to complete
5. Enable **Enforce HTTPS** (after DNS propagates)

#### B. Configure DNS at your domain registrar:

**For apex domain (kevilgandhi.me):**
Add these A records:
```
Type: A    Name: @    Value: 185.199.108.153
Type: A    Name: @    Value: 185.199.109.153
Type: A    Name: @    Value: 185.199.110.153
Type: A    Name: @    Value: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME    Name: www    Value: Kevil-Gandhi.github.io
```

#### C. Wait for DNS propagation (24-48 hours)
Check status: https://dnschecker.org

### 7. Update and Redeploy
Whenever you make changes:
```bash
git add .
git commit -m "Update portfolio"
git push
npm run deploy
```

---

## 🎨 Customization Tips

### Update GitHub Username
Find and replace `Kevil-Gandhi` with your actual GitHub username in:
- `src/sections/Hero.jsx`
- `src/sections/GitHub.jsx`

### Change Colors
Edit `src/index.css` and update the color values:
```css
@theme {
  --color-primary: #6366f1;  /* Change this */
  --color-secondary: #8b5cf6; /* Change this */
}
```

### Update Content
- **Hero**: `src/sections/Hero.jsx`
- **About**: `src/sections/About.jsx`
- **Skills**: `src/sections/Skills.jsx`
- **Projects**: `src/sections/Projects.jsx`
- **Contact**: `src/sections/Contact.jsx`

### Add LinkedIn URL
Update LinkedIn links in:
- `src/sections/Contact.jsx`
- `src/components/Footer.jsx`

Replace `https://linkedin.com/in/kevil-gandhi` with your actual LinkedIn URL.

---

## 📱 Test Locally

```bash
# Development server
npm run dev

# Preview production build
npm run build
npm run preview
```

---

## ✅ Checklist

- [ ] Update GitHub username in code
- [ ] Add your LinkedIn URL
- [ ] Update project links
- [ ] Test all sections
- [ ] Deploy to GitHub Pages
- [ ] Configure custom domain DNS
- [ ] Enable HTTPS
- [ ] Test on mobile devices

---

## 🆘 Troubleshooting

**Build fails?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Deploy fails?**
```bash
npm install gh-pages --save-dev
npm run deploy
```

**Custom domain not working?**
- Wait 24-48 hours for DNS propagation
- Verify DNS records at your registrar
- Check GitHub Pages settings
- Ensure CNAME file exists in `public/` folder

---

## 📞 Need Help?

Check the main README.md for detailed documentation.

Your portfolio is built with:
- ⚛️ React + Vite
- 🎨 Tailwind CSS
- ✨ Framer Motion
- 📱 Fully Responsive
- 🌓 Dark/Light Mode
- 🚀 Optimized Performance

Good luck with your portfolio! 🎉
