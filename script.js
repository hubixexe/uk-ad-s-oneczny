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
            document.getElementById("info").innerText = planets[this.id];
        });
    });
});
// Funkcja, która zmienia obrazek planety
function pokazObraz(planetName) {
    let imageSrc = '';
    
    // Sprawdzamy, która planeta została kliknięta i ustawiamy odpowiedni obrazek
    switch(planetName) {
        case 'merkury':
            imageSrc = 'images/merkury.jpg';
            break;
        case 'wenus':
            imageSrc = 'images/wenus.jpg';
            break;
        case 'ziemia':
            imageSrc = 'images/ziemia.jpg';
            break;
        case 'mars':
            imageSrc = 'images/mars.jpg';
            break;
        case 'jowisz':
            imageSrc = 'images/jowisz.jpg';
            break;
        case 'saturn':
            imageSrc = 'images/saturn.jpg';
            break;
        case 'uran':
            imageSrc = 'images/uran.jpg';
            break;
        case 'neptun':
            imageSrc = 'images/neptun.jpg';
            break;
        default:
            imageSrc = '';
    }

    // Ustawiamy źródło obrazka i pokazujemy go
    document.getElementById('planet-img').src = imageSrc;
    document.getElementById('planet-image').style.display = 'block';
}
// Funkcja, która zmienia obrazek planety
function pokazObraz(planetName) {
    let imageSrc = '';
    
    // Sprawdzamy, która planeta została kliknięta i ustawiamy odpowiedni obrazek
    switch(planetName) {
        case 'merkury':
            imageSrc = 'images/merkury.jpg';
            break;
        case 'wenus':
            imageSrc = 'images/wenus.jpg';
            break;
        case 'ziemia':
            imageSrc = 'images/ziemia.jpg';
            break;
        case 'mars':
            imageSrc = 'images/mars.jpg';
            break;
        case 'jowisz':
            imageSrc = 'images/jowisz.jpg';
            break;
        case 'saturn':
            imageSrc = 'images/saturn.jpg';
            break;
        case 'uran':
            imageSrc = 'images/uran.jpg';
            break;
        case 'neptun':
            imageSrc = 'images/neptun.jpg';
            break;
        default:
            imageSrc = '';
    }

    // Ustawiamy źródło obrazka i pokazujemy go
    document.getElementById('planet-img').src = imageSrc;
    document.getElementById('planet-image').style.display = 'block';
}

// Funkcja pokazująca szczegóły o planecie
function pokazSzczegoly(planetName) {
    const infoDiv = document.getElementById(planetName + '-info');
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display = 'none';
    }
}

// Funkcja przekierowująca do gry w Scratchu
function przejdzDoGry() {
    window.location.href = 'https://scratch.mit.edu/projects/TWÓJ_ID_GRy';
}
