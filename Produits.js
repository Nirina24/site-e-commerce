// Liste des produits avec leurs détails
const products = [
//PREMIER LISTE
    { name: "LENOVO V15 G3IAP", price: "2.600.000 Ar", cpu: "Coré i5 1235U", image: "IMGPR/lenovo.jpg", link: "Formulaire.html" },
    { name: "LENOVO V15 G3IAP", price: "1.900.000 Ar", cpu: "Coré i3 1215U", image: "IMGPR/ordi.jpg", link: "Formulaire.html" },
    { name: "HP", price: "1.900.000 Ar", cpu: "Coré i3 1215U", image: "IMGPR/HP.jpg", link: "Formulaire.html" },
//DEUXIEME LISTE
{ name: "DELL VOSTRO 3520", price: "4.250.000 Ar", cpu: "Coré i7 1255U", image: "IMGPR/vestro.jpg", link: "Formulaire.html" },
{ name: "DELL VOSTRO 3520", price: "2.750.000 Ar", cpu: "Coré i5 1235U", image: "IMGPR/vestro 1.webp", link: "Formulaire.html" },
{ name: "DELL VOSTRO 3520", price: "2.750.000 Ar", cpu: "Coré i5 1235U", image: "IMGPR/vestro 2.jpg", link: "Formulaire.html" },
    
//TROISIEME LISTE
{ name: "VAIO Z", price: "3.500.000 Ar", cpu: "Intel Core i7 11370H", image: "IMGPR/vaio.jpg", link: "Formulaire.html" },
{ name: "LG Gram 17", price: "4.000.000 Ar", cpu: "Intel Core i7 1165G7", image: "IMGPR/LG.jpg", link: "Formulaire.html" },
{ name: "TOSHIBA Dynabook", price: "2.200.000 Ar", cpu: "Intel Core i5 1135G7", image: "IMGPR/toshiba.jpg", link: "Formulaire.html" },

//QUATRIEME LISTE
{ name: "COMPAQ Presario", price: "1.600.000 Ar", cpu: "Intel Core i3 10110U", image: "IMGPR/COMPAQ.jpg", link: "Formulaire.html" },
{ name: "BENQ Joybook", price: "1.400.000 Ar", cpu: "Intel Core i3 1005G1", image: "IMGPR/BEN.webp", link: "Formulaire.html" },
{ name: "Packard Bell EasyNote", price: "1.800.000 Ar", cpu: "Intel Core i5 10210U", image: "IMGPR/BELL.jpg", link: "Formulaire.html" },
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
                <p>${product.price || product.description || ''}</p>
                ${product.cpu ? `<p>CPU: ${product.cpu}</p>` : ''}
            `;
            productList.appendChild(productElement);
        });
    }
