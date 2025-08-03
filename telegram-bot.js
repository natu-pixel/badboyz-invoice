const TelegramBot = require('node-telegram-bot-api');

// Replace with your bot token from @BotFather
const BOT_TOKEN = 'YOUR_BOT_TOKEN_HERE';
const WEB_APP_URL = 'https://natu-pixel.github.io/badboyz-invoice/'; // Your deployed web app URL

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Welcome message with web app button
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: '🧾 Open BadBoyz Invoice',
            web_app: { url: WEB_APP_URL }
          }
        ],
        [
          {
            text: '📊 Quick Stats',
            callback_data: 'stats'
          },
          {
            text: '❓ Help',
            callback_data: 'help'
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, 
    '🎉 Welcome to BadBoyz Invoice!\n\n' +
    '📱 Tap "Open BadBoyz Invoice" to access the full invoice management system.\n\n' +
    '✨ Features:\n' +
    '• Create professional invoices\n' +
    '• Manage customers\n' +
    '• Track payments\n' +
    '• Generate reports\n\n' +
    '🚀 Get started now!', 
    options
  );
});

// Handle callback queries
bot.on('callback_query', (callbackQuery) => {
  const message = callbackQuery.message;
  const data = callbackQuery.data;
  const chatId = message.chat.id;

  switch (data) {
    case 'stats':
      bot.sendMessage(chatId, 
        '📊 Quick Stats:\n\n' +
        '💰 Total Revenue: $10,850\n' +
        '📄 Total Invoices: 25\n' +
        '👥 Active Customers: 12\n' +
        '⏰ Pending Payments: $3,472\n\n' +
        'Open the full app for detailed analytics!'
      );
      break;
      
    case 'help':
      bot.sendMessage(chatId,
        '❓ How to use BadBoyz Invoice:\n\n' +
        '1️⃣ Tap "Open BadBoyz Invoice" to launch the app\n' +
        '2️⃣ Add your customers in the Customers section\n' +
        '3️⃣ Create invoices with multiple line items\n' +
        '4️⃣ Track payment status\n' +
        '5️⃣ Generate professional PDFs\n\n' +
        '💡 Tip: The app works great on mobile and desktop!'
      );
      break;
  }

  bot.answerCallbackQuery(callbackQuery.id);
});

// Handle text messages
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Skip if it's a command
  if (text && text.startsWith('/')) return;

  if (text) {
    bot.sendMessage(chatId, 
      '👋 Hi! Use the menu button or type /start to access BadBoyz Invoice system.'
    );
  }
});

console.log('🤖 BadBoyz Invoice Telegram Bot is running...');
