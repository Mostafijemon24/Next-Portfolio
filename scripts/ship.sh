#!/usr/bin/env bash
# Code changes → live deploy (one command)
# Usage: npm run ship   OR   bash scripts/ship.sh
set -e
cd "$(dirname "$0")/.."

echo ""
echo "→ Building..."
npm run build

echo ""
echo "→ Deploying to Vercel production..."
npx vercel --prod --yes

echo ""
echo "→ Health check..."
npm run check:live

echo "Done. Hard refresh the live site: Cmd+Shift+R"
