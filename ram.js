// Liste des produits avec leurs détails
const products = [
    { name: "DDR2", price: "1200$", cpu: "DDR2 1Go", image: "img/ddr2 1go.jpg", link: "Formulaire.html" },
    { name: "DDR2", price: "70 000 Ar", cpu: "DDR2 2Go", image: "img/ddr2 2go.jpg", link: "Formulaire.html" },
    { name: "DDR3", price: "50 000 Ar", cpu: "DDR3 2Go 10 600", image: "img/ddr3 2go.jpg", link: "Formulaire.html" },
    { name: "DDR3", price: "120 000 Ar", cpu: "DDR3 4Go 10 600", image: "img/ddr3 4go.jpg", link: "Formulaire.html" },
    { name: "DDR3", price: "240 000 Ar", cpu: "DDR3 8Go 10 600", image: "img/ddr3 8go.jpg", link: "Formulaire.html" },
    { name: "DDR3L", price: "50 000 Ar", cpu: "DDR3L 2Go 12 800S", image: "img/ddr3l 2go.jpg", link: "Formulaire.html" },
    { name: "DDR3L", price: "120 000 Ar", cpu: "DDR3L 4Go 12 800S", image: "img/ddr3l 4go.jpg", link: "Formulaire.html" },
    { name: "DDR3L", price: "240 000 Ar", cpu: "DDR3L 8Go 12 800S", image: "img/ddr3l 8go.jpg", link: "Formulaire.html" },
    { name: "DDR4", price: "140 000 Ar", cpu: "DDR4 4Go 2400", image: "img/ddr4 4go.jpg", link: "Formulaire.html" },
    { name: "DDR4", price: "250 000 Ar", cpu: "DDR4 8Go 2400", image: "img/ddr416go.jpg", link: "Formulaire.html" },
    { name: "DDR4", price: "500 000 Ar", cpu: "DDR4 16Go 2400", image: "img/ddr416go.jpg", link: "Formulaire.html" },
    { name: "DDR4", price: "140 000 Ar", cpu: "DDR4 4Go 2666", image: "img/ddr416go.jpg", link: "Formulaire.html" },
    { name: "DDR4", price: "250 000 Ar", cpu: "DDR4 8Go 2666", image: "img/ddr4 8Go2666.jpg", link: "Formulaire.html" },
    { name: "DDR4", price: "500 000 Ar", cpu: "DDR4 16Go 2666", image: "img/ddr416go.jpg", link: "Formulaire.html" }
];

// Fonction pour charger le contenu une fois la page prête
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const productList = document.getElementById('product-list');

    // Événement de recherche
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(searchTerm) ||
            (product.cpu && product.cpu.toLowerCase().includes(searchTerm))
        );

        displayProducts(filteredProducts);
    });

    // Fonction pour afficher les produits
    function displayProducts(results) {
        productList.innerHTML = ''; // Effacer les produits existants

        if (results.length === 0) {
            productList.innerHTML = '<p>Aucun produit ne correspond à votre recherche.</p>';
            return;
        }

        results.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Prix: ${product.price}</p>
                ${product.cpu ? `<p>CPU: ${product.cpu}</p>` : ''}
                <a href="${product.link}"><button class="buy-button">Acheter</button></a>
            `;
            productList.appendChild(productElement);
        });
    }

    // Afficher tous les produits au chargement initial
    displayProducts(products);
});
