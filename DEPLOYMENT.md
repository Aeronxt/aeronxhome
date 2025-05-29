# Deployment Guide - Cloudflare Pages

This project is deployed using **Cloudflare Pages** with automatic builds and deployments.

## 🚀 Automatic Deployment

The site automatically deploys when you push to the `master` branch. Cloudflare Pages handles:
- ✅ **Automatic builds** using `npm run build`
- ✅ **Dependency installation** 
- ✅ **Static file serving**
- ✅ **Global CDN distribution**

## 🔧 Setup Requirements

### 1. Cloudflare Account Setup
1. Create a [Cloudflare account](https://dash.cloudflare.com/sign-up)
2. Go to **Pages** in the Cloudflare dashboard
3. Connect your GitHub repository
4. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18`

### 2. GitHub Secrets
Add these secrets to your GitHub repository settings:

```
CLOUDFLARE_API_TOKEN=your_api_token_here
CLOUDFLARE_ACCOUNT_ID=your_account_id_here
```

**To get your API token:**
1. Go to [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
2. Create a **Custom Token** with:
   - **Permissions**: `Cloudflare Pages:Edit`
   - **Account Resources**: Include your account
   - **Zone Resources**: Include all zones

## 🌐 Live Site

The site will be available at:
- **Production**: `https://aeron-x.pages.dev`
- **Custom Domain**: Configure in Cloudflare Pages dashboard

## 📁 Project Structure

```
aeron-x/
├── src/                 # React source code
├── public/             # Static assets
├── dist/               # Build output (auto-generated)
├── .github/workflows/  # GitHub Actions
└── package.json        # Dependencies and scripts
```

## 🛠 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🔄 Deployment Process

1. **Push to master** → Triggers GitHub Action
2. **GitHub Action** → Deploys to Cloudflare Pages
3. **Cloudflare Pages** → Builds and serves the site globally

## 📊 Benefits of Cloudflare Pages

- ✅ **Zero configuration** - automatic builds
- ✅ **Global CDN** - fast worldwide delivery
- ✅ **Free SSL** - automatic HTTPS
- ✅ **Preview deployments** - for pull requests
- ✅ **Analytics** - built-in traffic insights
- ✅ **No server management** - fully serverless

## 🐛 Troubleshooting

If deployment fails:
1. Check the **GitHub Actions** tab for build logs
2. Verify **Cloudflare Pages** dashboard for deployment status
3. Ensure all **environment variables** are set correctly

For build issues, the automatic build system handles dependency resolution much more reliably than manual configurations.
