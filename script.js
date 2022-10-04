const carousel = document.getElementById('carousel');
var backgroundIMG = 0;

console.log(carousel);

setInterval(changeIMG, 15000);

function changeIMG(){

    if (backgroundIMG < 3 ) {
        backgroundIMG++;
    }
    else {
        backgroundIMG = 0;
    }
    // console.log(backgroundIMG);
    
    carousel.setAttribute("src", `img/background${backgroundIMG}.jpg`)

}

// Apparition des voitures scroll !

const articles = document.querySelectorAll("article");

const scrollCar = () => {
    // Détermine la position du bas de l'écran
    const triggerBottom = (window.innerHeight / 6) * 4;

    // Faire ça pour chaque article
    articles.forEach((article) => {

        // Détermine la position du bas des balises articles
        const articleTop = article.getBoundingClientRect().top;

        // Si la position du haut de la balise article est plus petit que la position du bas de l'écran
        if (articleTop < triggerBottom) {
          article.classList.add("show");
        } else {
          article.classList.remove("show");
        }
    });
}

scrollCar();

window.addEventListener("scroll", scrollCar);


// Changement d'images voiture avec bouton

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const result = button.dataset.carouselButton === "next" ? 1 : 0
        // console.log(result);

        const imgCarouselChange = button.parentElement.querySelector("img");

        const attribute = imgCarouselChange.getAttribute("src");
        // console.log(attribute);
        const newIMG = changeNumberIMG(attribute);
        // console.log(newIMG+result+".png");

        switch (result) {
            case 1:
                imgCarouselChange.setAttribute("src", newIMG+result+".png");
            break;
        
            default:
                imgCarouselChange.setAttribute("src", newIMG+result+".png");
            break;
        }
    })
});

// console.log(button);

function changeNumberIMG(strIMG){
    const tab = strIMG.split("_")
    // console.log(tab[0]);
    const result = tab[0]+"_";
    // console.log(result);

    return result;
}