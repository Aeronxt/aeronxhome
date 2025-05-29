# Deployment Guide

This project is configured for deployment with Cloudflare Workers using Wrangler.

## Prerequisites

1. Install Cloudflare Wrangler CLI globally (optional, we use npx):
   ```bash
   npm install -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   npx wrangler login
   ```

## Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Cloudflare Workers:
   ```bash
   npx wrangler deploy
   ```

   Or use the provided script:
   ```bash
   chmod +x deploy.sh
   ./deploy.sh
   ```

   Or use the npm script:
   ```bash
   npm run deploy
   ```

## Automated Deployment with GitHub Actions

The project includes a GitHub Actions workflow for automated deployment. To set it up:

1. In your GitHub repository, go to Settings > Secrets and variables > Actions

2. Add the following secrets:
   - `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Workers permissions
   - `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

3. Push to the master branch to trigger automatic deployment

## Environment Variables

If you need to add environment variables for production:

1. Add them to the `[vars]` section in `wrangler.toml`
2. Or use `npx wrangler secret put <KEY>` for sensitive values

## Custom Domain

To add a custom domain:

1. In the Cloudflare Dashboard, go to Workers & Pages > Your Worker > Settings > Triggers
2. Add your custom domain and configure the route patterns

## KV Storage

This worker is configured to use Cloudflare KV for asset storage. Make sure to:

1. Create a KV namespace in your Cloudflare dashboard
2. Update the `kv_namespaces` section in `wrangler.toml` with your namespace IDs
