const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('🤖 BadBoyz Invoice Bot Setup');
console.log('============================\n');

console.log('📋 Before starting, make sure you have:');
console.log('1. Created a bot with @BotFather');
console.log('2. Deployed your web app to a hosting service');
console.log('3. Have your bot token and web app URL ready\n');

rl.question('🔑 Enter your bot token from @BotFather: ', (botToken) => {
  rl.question('🌐 Enter your deployed web app URL: ', (webAppUrl) => {
    
    // Create .env file
    const envContent = `BOT_TOKEN=${botToken}
WEB_APP_URL=${webAppUrl}
PORT=3000`;

    fs.writeFileSync('.env', envContent);
    
    // Update telegram-bot.js with the values
    let botCode = fs.readFileSync('telegram-bot.js', 'utf8');
    botCode = botCode.replace('YOUR_BOT_TOKEN_HERE', botToken);
    botCode = botCode.replace('https://your-domain.com', webAppUrl);
    
    fs.writeFileSync('telegram-bot.js', botCode);
    
    console.log('\n✅ Configuration complete!');
    console.log('\n📝 Files updated:');
    console.log('- .env file created');
    console.log('- telegram-bot.js updated');
    
    console.log('\n🚀 Next steps:');
    console.log('1. Install dependencies: npm install');
    console.log('2. Test locally: npm start');
    console.log('3. Deploy to hosting service (Railway, Heroku, etc.)');
    console.log('4. Set up web app button in @BotFather');
    
    console.log('\n🎯 BotFather commands to run:');
    console.log('/mybots → Select your bot → Bot Settings → Menu Button');
    console.log(`Web App URL: ${webAppUrl}`);
    console.log('Button text: 🧾 Open Invoice App');
    
    console.log('\n🎉 Your bot is ready to go live!');
    
    rl.close();
  });
});

rl.on('close', () => {
  process.exit(0);
});
