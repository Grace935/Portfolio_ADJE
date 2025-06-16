document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Récupération des valeurs du formulaire
    const surname = document.getElementById("surname").value;
    const name = document.getElementById("name").value;
    const sujet = document.getElementById("sujet").value;
    const message = document.getElementById("message").value;

    // Validation simple
    if (name && surname && sujet && message) {
      document.getElementById("responseMessage").innerText =
        +" Votre message a été envoyé. Merci!";

      // Réinitialisation du formulaire
      document.getElementById("contactForm").reset();
    } else {
      document.getElementById("responseMessage").innerText =
        "Veuillez remplir tous les champs.";
    }
  });
