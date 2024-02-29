async function runBot() {
  // Haal de code op uit het tekstvak
  var code = document.getElementById("code").value;

  // Maak een nieuwe client met Discord.js-light
  const client = new Discord.Client();

  // Event dat wordt uitgevoerd wanneer de bot is verbonden en klaar is om berichten te ontvangen
  client.on('ready', () => {
    logMessage(`Bot is ingelogd als ${client.user.username}`);
  });

  // Event dat wordt uitgevoerd wanneer de bot een bericht ontvangt
  client.on('message', message => {
    // Controleer of het bericht begint met het prefix '!' en het commando 'hallo' bevat
    if (message.content.toLowerCase() === '!hallo') {
      // Stuur een bericht terug naar hetzelfde kanaal waar het commando is ontvangen
      message.channel.send('Hallo! Ik ben een Discord-bot.');
    }
  });

  try {
    // Log in op Discord met de bot token
    await client.login('JOUW_BOT_TOKEN');
  } catch (error) {
    logMessage('Er is een fout opgetreden bij het inloggen op Discord.');
  }

  // Eval de gegeven botcode
  try {
    eval(code);
  } catch (error) {
    logMessage('Er is een fout opgetreden bij het uitvoeren van de botcode.');
  }
}

// Functie om een bericht te loggen naar het uitvoerdiv
function logMessage(message) {
  document.getElementById("output").innerText = message;
}
