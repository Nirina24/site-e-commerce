const backgroundContainer = document.querySelector('.background-container');
const images = [
    'images/maintenance.jpg',
    'images/chiffre.jpg',
    'images/ordi.webp',
    'images/background.jpg'
];
let currentIndex = 0;

// Créer les éléments d'arrière-plan pour chaque image
images.forEach((image, index) => {
    const bgElement = document.createElement('div');
    bgElement.classList.add('background-image');
    bgElement.style.backgroundImage = `url(${image})`;
    if (index === 0) bgElement.classList.add('active');
    backgroundContainer.appendChild(bgElement);
});

function changeBackground() {
    const bgElements = document.querySelectorAll('.background-image');
    bgElements[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    bgElements[currentIndex].classList.add('active');
    
    // Réinitialiser les animations du texte
    const textElements = document.querySelectorAll('.text-content h1, .text-content p');
    textElements.forEach(el => {
        el.style.animation = 'none';
        el.offsetHeight; // Déclenche un reflow
        el.style.animation = null;
    });
}

// Changer l'image de fond toutes les 3 secondes
setInterval(changeBackground, 3000);

//STYLES DES PRODUITS

const products = [
    {
        imgLeft: 'images/CABLE.png',
        imgRight: 'images/CLAVIER.png',
        text: 'Offre exceptionnelle cette semaine',
        subtext: 'Nouvelle Collection',
        buttonText: 'Acheter Maintenant'
    },
    {
        imgLeft: 'images/Portable.png',
        imgRight: 'images/PORTABLE-.png',
        text: 'Super Promo pour Ordinateurs',
        subtext: 'Nouveaux modèles disponibles',
        buttonText: 'Acheter Maintenant'
    }
    // Ajouter d'autres produits ici
];

let currentProduct = 0;

function updateProduct() {
    const leftImage = document.querySelector('.left');
    const rightImage = document.querySelector('.right');
    const offerText = document.querySelector('.offer-text h2');
    const subText = document.querySelector('.offer-text p');
    const buyButton = document.getElementById('buy-now');

    // Ajoute les animations avant le changement
    leftImage.classList.add('slide-left');
    rightImage.classList.add('slide-right');

    setTimeout(() => {
        // Mise à jour des contenus après un court délai
        leftImage.src = products[currentProduct].imgLeft;
        rightImage.src = products[currentProduct].imgRight;
        offerText.textContent = products[currentProduct].text;
        subText.textContent = products[currentProduct].subtext;
        buyButton.textContent = products[currentProduct].buttonText;

        // Enlève les classes pour remettre les images à leur position initiale
        leftImage.classList.remove('slide-left');
        rightImage.classList.remove('slide-right');
    }, 500);  // délai de 500ms avant de changer le contenu

    // Passe au produit suivant
    currentProduct = (currentProduct + 1) % products.length;
}

// Change le produit toutes les 5 secondes
setInterval(updateProduct, 5000);
document.getElementById('search-input').addEventListener('input', function() {
    console.log("Recherche en cours : " + this.value);
    // Ajoutez ici la logique de recherche si nécessaire.
});
