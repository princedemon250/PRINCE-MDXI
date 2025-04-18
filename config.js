const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });


// Load configuration from config.json
const configData = JSON.parse(fs.readFileSync('./config.json', 'utf-8'));



function convertToBool(text, fault = 'true') {
return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "prince_md-85f1f49c1a331ca6e43b0017b6bab72c",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "false",
MODE: process.env.MODE || "private",
OWNER_NUMBER: process.env.OWNER_NUMBER || "50940083161",
OWNER_NAME: process.env.OWNER_NAME || "🍷𝛲𝑅𝛪𝛮𝐶𝛯_🌹_𝐷𝛯⍣⃝M⃝𝛩𝛮🍷",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
MENU_IMG: process.env.MENU_IMG || "https://raw.githubusercontent.com/Mayelprince/url/main/url/1264.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "Hi 💁🏽 How Can I Assist You. Am alive Now.",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || "†",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "fase",
BOT_NAME: process.env.BOT_NAME || "🍷𝛲𝑅𝛪𝛮𝐶𝛯_🌹_𝐷𝛯⍣⃝M⃝𝛩𝛮🍷",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};



