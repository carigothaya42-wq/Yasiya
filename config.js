const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~ZNJWATyA#An4ZijHIloZ9-Y51P_pnCtYC3KpHhQYFU60jM4NRPr4'
};
