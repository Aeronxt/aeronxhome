#!/bin/bash

# Build the project
npm run build

# Deploy to Cloudflare Workers using Wrangler
wrangler deploy
