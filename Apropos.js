function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".stat h3");
    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute("data-target");
            const count = +counter.innerText;

            // Ajustez l'incrément en fonction de la valeur cible
            const increment = target / 200; // Augmentez ce chiffre pour une vitesse plus lente

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 100); // Ajustez la vitesse de l'animation (augmentez la valeur pour plus de lenteur)
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
