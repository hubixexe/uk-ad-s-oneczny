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

    // Klikanie na planetę, by wyświetlić informacje
    document.querySelectorAll(".planet").forEach(planet => {
        planet.addEventListener("click", function() {
            document.getElementById("info").innerText = planets[this.id];
            pokazObraz(this.id);  // Dodajemy funkcję do zmiany obrazka przy kliknięciu
            pokazSzczegoly(this.id);  // Pokazujemy szczegóły o planecie
        });
    });
});

// Funkcja zmieniająca obrazek planety
function pokazObraz(planetName) {
    console.log("Kliknięto planetę:", planetName); // Sprawdzenie, czy funkcja działa
    let imageSrc = 'images/' + planetName + '.jpg';
    
    let imgElement = document.getElementById('planet-img');
    imgElement.src = imageSrc;
    imgElement.onerror = function() {
        console.log("Błąd ładowania obrazu:", imageSrc);
    };

    document.getElementById('planet-image').style.display = 'block';
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
