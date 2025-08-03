@echo off
echo Pushing updated code to GitHub...

git add .
git commit -m "Fix build errors and update for GitHub Pages deployment"
git push origin main

echo Done! Check GitHub Actions at: https://github.com/natu-pixel/badboyz-invoice/actions
pause
