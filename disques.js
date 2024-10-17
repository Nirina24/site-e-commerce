// Indices actuels de chaque carrousel
let currentIndices = [0, 0, 0]; // Un index pour chaque carrousel

// Fonction pour passer à la slide suivante dans le carrousel correspondant
function nextSlide(carrouselIndex) {
    const carrousels = document.querySelectorAll('.carrousel');
    const carrousel = carrousels[carrouselIndex];
    const totalItems = carrousel.querySelectorAll('.carrousel-item').length;

    // Augmente l'indice pour passer à l'élément suivant
    currentIndices[carrouselIndex]++;

    // Si l'indice dépasse le nombre d'éléments, revient au début
    if (currentIndices[carrouselIndex] >= totalItems) {
        currentIndices[carrouselIndex] = 0;
    }

    // Applique la transformation pour faire défiler les éléments
    carrousel.style.transform = `translateX(-${currentIndices[carrouselIndex] * 100}%)`;
}

// Fonction pour revenir à la slide précédente dans le carrousel correspondant
function prevSlide(carrouselIndex) {
    const carrousels = document.querySelectorAll('.carrousel');
    const carrousel = carrousels[carrouselIndex];
    const totalItems = carrousel.querySelectorAll('.carrousel-item').length;

    // Diminue l'indice pour revenir à l'élément précédent
    currentIndices[carrouselIndex]--;

    // Si l'indice devient inférieur à 0, revient à la fin
    if (currentIndices[carrouselIndex] < 0) {
        currentIndices[carrouselIndex] = totalItems - 1;
    }

    // Applique la transformation pour faire défiler les éléments
    carrousel.style.transform = `translateX(-${currentIndices[carrouselIndex] * 100}%)`;
}

// Gérer la recherche dans les produits
document.getElementById('search-input').addEventListener('input', function() {
    const searchValue = this.value.toLowerCase();
    const carrouselContainers = document.querySelectorAll('.carrousel-container');

    carrouselContainers.forEach(container => {
        const items = container.querySelectorAll('.carrousel-item');
        let hasMatch = false;  // Indicateur pour savoir si au moins un élément correspond

        items.forEach(item => {
            const productName = item.getAttribute('data-name').toLowerCase();

            // Vérifier si le nom du produit contient la valeur recherchée
            if (productName.includes(searchValue)) {
                item.style.display = '';  // Afficher l'élément correspondant
                hasMatch = true;  // Un élément correspond
            } else {
                item.style.display = 'none';  // Masquer l'élément non correspondant
            }
        });

        // Cacher ou afficher le conteneur du carrousel en fonction des correspondances
        if (hasMatch) {
            container.style.display = '';  // Afficher le carrousel si au moins un élément correspond
        } else {
            container.style.display = 'none';  // Masquer le carrousel si aucun élément ne correspond
        }
    });
});
