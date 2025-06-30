# Deployment Guide for Noble Health Services

This guide covers deploying your Next.js app to various production platforms.

## 🚀 Quick Start

1. **Prepare your environment variables:**
   ```bash
   cp env.production.example .env.production
   # Edit .env.production with your actual values
   ```

2. **Test production build locally:**
   ```bash
   npm run build:prod
   npm run start:prod
   ```

## 📦 Deployment Options

### 1. Vercel (Recommended for Next.js)

**Pros:** Zero config, automatic deployments, built for Next.js
**Cons:** Limited free tier

#### Setup:
1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

#### Environment Variables:
- Go to Vercel Dashboard → Your Project → Settings → Environment Variables
- Add all variables from `.env.production`

#### Automatic Deployments:
- Connect your GitHub repo to Vercel
- Every push to `main` branch triggers deployment

---

### 2. Railway

**Pros:** Simple, good free tier, automatic deployments
**Cons:** Limited customization

#### Setup:
1. Go to [railway.app](https://railway.app)
2. Connect your GitHub repo
3. Railway auto-detects Next.js and deploys

#### Environment Variables:
- Railway Dashboard → Your Project → Variables
- Add all variables from `.env.production`

---

### 3. Render

**Pros:** Good free tier, simple setup
**Cons:** Slower cold starts

#### Setup:
1. Go to [render.com](https://render.com)
2. Connect your GitHub repo
3. Choose "Web Service"
4. Build Command: `npm run build:prod`
5. Start Command: `npm run start:prod`

#### Environment Variables:
- Render Dashboard → Your Service → Environment
- Add all variables from `.env.production`

---

### 4. Custom VPS (Ubuntu + Nginx)

**Pros:** Full control, cost-effective for high traffic
**Cons:** More complex setup, manual maintenance

#### Server Setup:
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Nginx
sudo apt install nginx -y

# Install PM2 for process management
sudo npm install -g pm2
```

#### Application Setup:
```bash
# Clone your repo
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm ci --only=production

# Create production env file
cp env.production.example .env.production
# Edit with your values

# Build the application
npm run build:prod

# Start with PM2
pm2 start npm --name "noble-health" -- start:prod
pm2 startup
pm2 save
```

#### Nginx Configuration:
Create `/etc/nginx/sites-available/noble-health`:
```nginx
server {
    listen 80;
    server_name your-domain.com www.your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:
```bash
sudo ln -s /etc/nginx/sites-available/noble-health /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### SSL with Let's Encrypt:
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
```

---

## 🔧 Environment Variables Management

### For All Platforms:
1. **Never commit `.env.production` to Git**
2. **Use platform-specific environment variable settings**
3. **Test locally with `.env.production` before deploying**

### Required Variables:
- `NEXT_PUBLIC_APP_URL`: Your production domain
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: If using maps
- `NEXT_PUBLIC_FIREBASE_*`: If using Firebase features

---

## 📊 Static vs SSR Decision

### Use Static Export (`next export`) if:
- ✅ No server-side data fetching
- ✅ No API routes
- ✅ No authentication
- ✅ Deploying to static hosting (GitHub Pages, Netlify)

### Use SSR (default) if:
- ✅ Server-side data fetching
- ✅ API routes
- ✅ Authentication
- ✅ Dynamic content

**For your app:** Use SSR (default) since you have dynamic content and potential API routes.

---

## 🔄 CI/CD Setup

### GitHub Actions (Optional)

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build:prod
      env:
        NEXT_PUBLIC_APP_URL: ${{ secrets.NEXT_PUBLIC_APP_URL }}
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: ${{ secrets.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY }}
        # Add other environment variables
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

---

## 🧪 Pre-Deployment Checklist

- [ ] Environment variables configured
- [ ] Production build works locally
- [ ] All images load correctly
- [ ] Forms and interactions work
- [ ] Mobile responsiveness tested
- [ ] Performance optimized
- [ ] Security headers configured
- [ ] SSL certificate (for custom domain)

---

## 🚨 Troubleshooting

### Common Issues:

1. **Build fails:**
   - Check for missing dependencies
   - Verify environment variables
   - Check TypeScript errors

2. **Images not loading:**
   - Verify domains in `next.config.js`
   - Check image URLs are accessible

3. **Environment variables not working:**
   - Ensure `NEXT_PUBLIC_` prefix for client-side variables
   - Check platform-specific variable settings

4. **Performance issues:**
   - Enable compression
   - Optimize images
   - Use CDN for static assets

---

## 📞 Support

For deployment issues:
1. Check platform-specific documentation
2. Review build logs
3. Test locally with production settings
4. Check environment variables configuration 