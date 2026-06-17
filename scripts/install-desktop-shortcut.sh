#!/bin/bash
# Desktop shortcut ইনস্টল — একবার চালান
set -e

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
DESKTOP="$HOME/Desktop"
SHORTCUT="$DESKTOP/Publish-Mostafij-Site.command"

cat > "$SHORTCUT" << EOF
#!/bin/bash
cd "$PROJECT_DIR"
export PATH="/usr/local/bin:/opt/homebrew/bin:\$PATH"
if [ ! -f "publish.env" ] && [ -f "publish.env.example" ]; then
  cp publish.env.example publish.env
fi
if [ ! -d "node_modules" ]; then npm install; fi
npm run publish
echo ""
read -p "বন্ধ করতে Enter চাপুন..."
EOF

chmod +x "$SHORTCUT"
chmod +x "$PROJECT_DIR/Publish.command"

echo ""
echo "✓ Desktop shortcut তৈরি হয়েছে:"
echo "  $SHORTCUT"
echo ""
echo "এখন Desktop-এ 'Publish-Mostafij-Site' ডবল-ক্লিক করলেই publish হবে。"
echo ""
