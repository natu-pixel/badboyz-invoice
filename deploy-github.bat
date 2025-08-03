@echo off
echo 🚀 BadBoyz Invoice - GitHub Pages Deployment
echo =============================================

echo.
echo 📦 Building the application...
call npm run build

if %errorlevel% neq 0 (
    echo ❌ Build failed!
    pause
    exit /b 1
)

echo ✅ Build successful!
echo.

echo 🌐 Deploying to GitHub Pages...
call npm run deploy

if %errorlevel% neq 0 (
    echo ❌ Deployment failed!
    pause
    exit /b 1
)

echo.
echo 🎉 Deployment successful!
echo.
echo 📱 Your app will be available at:
echo https://YOUR_USERNAME.github.io/badboyz-invoice/
echo.
echo 🤖 Next steps for Telegram:
echo 1. Copy the URL above
echo 2. Update telegram-bot.js with your URL
echo 3. Configure @BotFather with the web app URL
echo.
pause
