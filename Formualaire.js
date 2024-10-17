// document.getElementById('purchase-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Empêche le rechargement de la page lors de la soumission

//     // Capture les données du formulaire
//     const formData = {
//         nom_client: document.getElementById('name').value,
//         email_client: document.getElementById('email').value,
//         tel_client: document.getElementById('phone').value,
//         produit: document.getElementById('product').value,
//         quantite: document.getElementById('quantity').value
//     };

//     // Envoie les données au serveur via une requête POST
//     fetch('/commande', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData) // Convertit les données du formulaire en JSON
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json(); // Récupère la réponse du serveur si la requête réussit
//         } else {
//             throw new Error('Erreur lors de la soumission du formulaire');
//         }
//     })
//     .then(data => {
//         // Affiche un message de confirmation
//         document.getElementById('confirmation-message').innerText = 'Commande enregistrée avec succès !';
//         document.getElementById('confirmation-message').style.color = "green";
//         // Optionnel : Vous pouvez réinitialiser le formulaire ici
//         document.getElementById('purchase-form').reset();
//     })
//     .catch(error => {
//         console.error('Erreur:', error);
//         // Affiche un message d'erreur si l'envoi échoue
//         document.getElementById('confirmation-message').innerText = 'Erreur lors de l\'enregistrement de la commande.';
//         document.getElementById('confirmation-message').style.color = "red";
//     });
// });
