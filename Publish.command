#!/bin/bash
# Double-click this file on Mac to publish (WordPress → GitHub → Vercel)
cd "$(dirname "$0")"
export PATH="/usr/local/bin:/opt/homebrew/bin:$PATH"

if [ ! -f "publish.env" ] && [ -f "publish.env.example" ]; then
  cp publish.env.example publish.env
  echo "publish.env তৈরি করা হয়েছে — প্রয়োজনে এডিট করুন।"
fi

if [ ! -d "node_modules" ]; then
  echo "প্রথমবার — npm install চলছে..."
  npm install
fi

npm run publish
echo ""
read -p "বন্ধ করতে Enter চাপুন..."
