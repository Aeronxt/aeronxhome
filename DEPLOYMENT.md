
# Deployment Guide

This project is configured for deployment with Cloudflare Pages using Wrangler.

## Prerequisites

1. Install Cloudflare Wrangler CLI globally:
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

## Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Pages:
   ```bash
   npx wrangler pages deploy dist --project-name=aeron-x-flowscape-website
   ```

   Or use the provided script:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

## Automated Deployment with GitHub Actions

The project includes a GitHub Actions workflow for automated deployment. To set it up:

1. In your GitHub repository, go to Settings > Secrets and variables > Actions

2. Add the following secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Pages permissions
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

3. Push to the main branch to trigger automatic deployment

## Environment Variables

If you need to add environment variables for production:

1. In the Cloudflare Dashboard, go to Pages > Your Project > Settings > Environment variables
2. Add your production environment variables there

## Custom Domain

To add a custom domain:

1. In the Cloudflare Dashboard, go to Pages > Your Project > Custom domains
2. Add your domain and follow the DNS configuration instructions
