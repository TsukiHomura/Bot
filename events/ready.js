const chalk = require('chalk');
const moment = require('moment');
module.exports = client => {
 console.log(chalk.black.bgRed('Bot en ligne'));
 console.log(chalk.inverse(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] `) + chalk.black.bgGreen(`${client.user.tag} est prêt.`));
  //client.user.setActivity('#TeamNeverBackDown',{type:'LISTENING'})

client.user.setActivity("#TeamNeverBackDown", {
  type: "STREAMING",
  url: "https://www.twitch.tv/tnbdesport"
});
};
// on off