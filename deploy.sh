#!/bin/bash

# Build the project
npm run build

# Deploy to Cloudflare Workers using Wrangler
npx wrangler deploy
