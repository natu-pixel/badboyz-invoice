#!/bin/bash

echo "🚀 BadBoyz Invoice Deployment Script"
echo "===================================="

# Build the web app
echo "📦 Building web application..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
else
    echo "❌ Build failed!"
    exit 1
fi

echo ""
echo "🌐 Deployment Options:"
echo "1. Vercel (Recommended)"
echo "2. Netlify"
echo "3. GitHub Pages"
echo ""

read -p "Choose deployment option (1-3): " choice

case $choice in
    1)
        echo "🚀 Deploying to Vercel..."
        if command -v vercel &> /dev/null; then
            vercel --prod
        else
            echo "❌ Vercel CLI not found. Install with: npm i -g vercel"
        fi
        ;;
    2)
        echo "🚀 Deploying to Netlify..."
        echo "📁 Upload the 'dist' folder to netlify.com"
        echo "🌐 Or use Netlify CLI: npm i -g netlify-cli && netlify deploy --prod --dir=dist"
        ;;
    3)
        echo "🚀 Deploying to GitHub Pages..."
        if npm list gh-pages &> /dev/null; then
            npm run deploy
        else
            echo "❌ gh-pages not found. Install with: npm install --save-dev gh-pages"
            echo "📝 Add this to package.json scripts: \"deploy\": \"gh-pages -d dist\""
        fi
        ;;
    *)
        echo "❌ Invalid option"
        exit 1
        ;;
esac

echo ""
echo "🤖 Next Steps:"
echo "1. Copy your deployed URL"
echo "2. Update telegram-bot.js with your URL"
echo "3. Deploy the bot to a hosting service"
echo "4. Set up your bot with @BotFather"
echo ""
echo "📖 See TELEGRAM_DEPLOYMENT.md for detailed instructions"
