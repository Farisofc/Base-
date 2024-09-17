const chalk = require("chalk")
const fs = require("fs")

//==========================
global.owner = ["6288297877862"]
//==========================
global.prefa = ['']
//==========================
global.mess = {
    succes: 'Successfully',
    owner: 'This feature could be used by owner only',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'This feature could be used by bot only',
    wait: 'proses...',
    linkm: 'Where is the link?',
    Premium: 'Khusus Premium',
    }
//==========================
    
let file = require.resolve(__filename);
fs.watchFile(file, () => {
fs.unwatchFile(file);
console.log(`Update ${__filename}`);
delete require.cache[file];
require(file);
});