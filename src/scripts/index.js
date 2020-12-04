import carouselData from './carouselData.js';

const heroHandler = (i) => {
    const imageSource = carouselData[i].images.desktop;
    const title = carouselData[i].title;
    const paragraph = carouselData[i].paragraph;
    document.querySelector("#section-1").style.backgroundImage = `url(${imageSource})`;
    document.querySelector("#section-2__container h2").innerText = title;
    document.querySelector("#section-2__container p").innerText = paragraph;
}

let index = 0;

document.getElementById("section-2__arrow_buttons").addEventListener('click', (event) => {
    if (event.target.id === "left-btn") {
        if (index === 0) {
            index = carouselData.length-1;
            return heroHandler(index);
        } else {
            index--;
            return heroHandler(index);
        }
    }

    if (event.target.id === "right-btn") {
        if (index === carouselData.length-1) {
            index = 0;
            return heroHandler(index);
        } else {
            index++;
            return heroHandler(index);
        }
    }
});