// Liste des produits avec leurs détails
const products = [
    //PREMIER LISTE
        { name: "CHARGEUR", price: "36 000 Ar", image: "IMGPIECE/CHARGEUR 1.png", link: "Formulaire.html" },
        { name: "COQUE", price: " 67 500 Ar", image: "IMGPIECE/coque 1.png", link: "Formulaire.html" },
        { name: "ECRAN ORDINATEUR PORTABLE", price: "99 000 Ar", image: "IMGPIECE/ecran 1.png", link: "Formulaire.html" },
    //DEUXIEME LISTE
        { name: "CLAVIER ORDINATEUR PORTABLE", price: "54 000 Ar", image: "IMGPIECE/CLAVIER 1.png", link: "Formulaire.html" },
        { name: "BATTERIE ORDINATEUR PORTABLE", price: "90 000 Ar ", image: "IMGPIECE/bat.jpg", link: "Formulaire.html" },
        { name: "CARTE MERE", price: " 76 500 Ar", image: "IMGPIECE/CARTEMERE.jpg", link: "Formulaire.html" },
        { name: "PROCESSEUR CPU", price: "300 000 à 800 000 Ar", image: "IMGPIECE/Processeur.webp", cpu: "Intel Core i3",  link: "Formulaire.html" },
        { name: "CARTE RESEAUX WIFI", price: " 80 000 à 300 000 Ar", image: "IMGPIECE/carte reseaux wifi.webp", link: "Formulaire.html" }
        
    //TROISIEME LISTE
   // { name: "VAIO Z", price: "3.500.000 Ar", cpu: "Intel Core i7 11370H", image: "IMGPR/vaio.jpg", link: "Formulaire.html" },
    //{ name: "LG Gram 17", price: "4.000.000 Ar", cpu: "Intel Core i7 1165G7", image: "IMGPR/LG.jpg", link: "Formulaire.html" },
    //{ name: "TOSHIBA Dynabook", price: "2.200.000 Ar", cpu: "Intel Core i5 1135G7", image: "IMGPR/toshiba.jpg", link: "Formulaire.html" },
    
    //QUATRIEME LISTE
    //{ name: "COMPAQ Presario", price: "1.600.000 Ar", cpu: "Intel Core i3 10110U", image: "IMGPR/COMPAQ.jpg", link: "Formulaire.html" },
    //{ name: "BENQ Joybook", price: "1.400.000 Ar", cpu: "Intel Core i3 1005G1", image: "IMGPR/BEN.webp", link: "Formulaire.html" },
   // { name: "Packard Bell EasyNote", price: "1.800.000 Ar", cpu: "Intel Core i5 10210U", image: "IMGPR/BELL.jpg", link: "Formulaire.html" },
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
    