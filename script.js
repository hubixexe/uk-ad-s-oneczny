document.addEventListener("DOMContentLoaded", function() {
    const planets = {
        merkury: "Merkury - Najmniejsza planeta, bardzo gorąca w dzień i zimna w nocy.",
        wenus: "Wenus - Planeta o gęstej atmosferze, najgorętsza w Układzie Słonecznym.",
        ziemia: "Ziemia - Nasza planeta, jedyna znana z życiem.",
        mars: "Mars - Czerwona planeta, na której może istnieć woda.",
        jowisz: "Jowisz - Największa planeta, ma ogromną burzę zwaną Wielką Czerwoną Plamą.",
        saturn: "Saturn - Znany z pięknych pierścieni z lodu i skał.",
        uran: "Uran - Planeta, która obraca się na boku.",
        neptun: "Neptun - Najbardziej wietrzna planeta w Układzie Słonecznym."
    };

    document.querySelectorAll(".planet").forEach(planet => {
        planet.addEventListener("click", function() {
            const infoElement = document.getElementById("info");
            if (infoElement) {
                infoElement.innerText = planets[this.id];
            } else {
                console.error("Element o ID 'info' nie istnieje.");
            }
        });
    });
});

// Funkcja, która zmienia obrazek planety
function pokazObraz(planetName) {
    let imageSrc = `images/${planetName}.jpg`;
    
    const planetImg = document.getElementById('planet-img');
    const planetImageDiv = document.getElementById('planet-image');

    if (planetImg && planetImageDiv) {
        planetImg.src = imageSrc;
        planetImageDiv.style.display = 'block';
    } else {
        console.error("Nie znaleziono elementów 'planet-img' lub 'planet-image'.");
    }
}

// Funkcja pokazująca szczegóły o planecie
function pokazSzczegoly(planetName) {
    const infoDiv = document.getElementById(planetName + '-info');
    if (infoDiv) {
        infoDiv.style.display = (infoDiv.style.display === 'none') ? 'block' : 'none';
    } else {
        console.error(`Element o ID '${planetName}-info' nie istnieje.`);
    }
}

