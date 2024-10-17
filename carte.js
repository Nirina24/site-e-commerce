// Liste des produits avec leurs détails
const products = [
    { name: "HDMI", price: "Ar 30 000 ~ Ar 120 000", image: "imge/hdmi.png", link: "/Formulaire.html" },
    { name: "VGA", price: "Ar 30 000 ~ Ar 50 000", image: "imge/vga.png", link: "/Formulaire.html" },
    { name: "USB", price: "Ar 20 000 ~ Ar 60 000 ", image: "imge/usb.png", link: "/Formulaire.html" },

    { name: "DISPLAY PORT", price: "Ar 35 000 ~ Ar 40 000", image: "imge/display_port 1.png", link: "/Formulaire.html" },
    { name: "DOOKING ", price: "Ar 200 000", image: "imge/station.png", link: "/Formulaire.html" },
    { name: "CABLE DE SECURITE", price: "Ar 40 000 ", image: "imge/securite.png", link: "/Formulaire.html" },

   // { name: "SOURIS", price: "Ar40 000", image: "imge/game 1.png", link: "/Formulaire.html" },
    { name: "CLAVIER", price: "Ar 35 000 ~ Ar 45 000", image: "imge/CLAVIER.png", link: "/Formulaire.html" },
    { name: "TYPE C RESEAU", price: "Ar 60 000", image: "imge/typec.png", link: "/Formulaire.html" },

    { name: "RACK", price: "Ar 40 000 ~ Ar 50 000", image: "imge/rack.png", link: "/Formulaire.html" },
    { name: "TAPIS SOURIS", price: "Ar 20 000", image: "imge/tapis.png", link: "/Formulaire.html" },
    { name: "CAPTEUR WIFI", price: "Ar 30 000 ~ Ar 50 000", image: "imge/capteur.png", link: "/Formulaire.html" },
    { name: "HOUSSE", price: "Ar 40 000", image: "imge/housse.png", link: "/Formulaire.html" },
 
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
