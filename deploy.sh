
#!/bin/bash

# Build the project
npm run build

# Deploy to Cloudflare Pages using Wrangler
npx wrangler pages deploy dist --project-name=aeron-x-flowscape-website
