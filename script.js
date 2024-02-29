async function runBot() {
  // Haal de code op uit het tekstvak
  var code = document.getElementById("code").value;

  // Maak een POST-verzoek naar de backend om de botcode uit te voeren
  try {
    const response = await fetch('https://voorbeeld-backend.com/run-bot', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: code })
    });

    // Controleer of het verzoek succesvol was
    if (response.ok) {
      // Haal de resultaten op van de backend
      const result = await response.json();

      // Toon de resultaten in het uitvoerdiv
      document.getElementById("output").innerText = result.message;
    } else {
      // Toon een foutmelding als er een probleem was met het verzoek
      document.getElementById("output").innerText = "Er is een fout opgetreden bij het uitvoeren van de botcode.";
    }
  } catch (error) {
    // Toon een foutmelding als er een probleem was met het verzoek
    console.error('Er is een fout opgetreden:', error);
    document.getElementById("output").innerText = "Er is een fout opgetreden bij het uitvoeren van de botcode.";
  }
}
