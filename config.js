const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=TUcwlYTJ#j0pK5MsiVYFDfqjl47rwf3P3lFnL2JacL08TJR1dFLM",
MONGODB: process.env.MONGODB || "mongodb+srv://enayatullahzakhil0:8IqqtYC9vMMSTx50@cluster001.ierzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster001",//enter mongo db url
};
