import carouselData from './carouselData.js';

window.addEventListener('load', () => {
    if (document.body.clientWidth > "767.98") {
        document.querySelector("#section-1").style.backgroundImage = `url(${carouselData[0].images.desktop})`;
    }
});

window.addEventListener('resize', () => {
    if (document.body.clientWidth > "991") {
        document.querySelector("#section-1").style.backgroundImage = `url(${carouselData[0].images.desktop})`;
        document.querySelector("#section-2__container h2").innerText = carouselData[0].title;
        document.querySelector("#section-2__container p").innerText = carouselData[0].paragraph;
    } else {
        document.querySelector("#section-1").style.backgroundImage = `url(${carouselData[0].images.mobile})`;
        document.querySelector("#section-2__container h2").innerText = carouselData[0].title;
        document.querySelector("#section-2__container p").innerText = carouselData[0].paragraph;
    }
})

const heroHandler = (i) => {
    let imageSource;
    if (document.body.clientWidth <= "767.98") {
        imageSource = carouselData[i].images.mobile;
    } else {
        imageSource = carouselData[i].images.desktop;
    }

    const title = carouselData[i].title;
    const paragraph = carouselData[i].paragraph;
    document.querySelector("#section-1").style.backgroundImage = `url(${imageSource})`;
    document.querySelector("#section-2__container h2").innerText = title;
    document.querySelector("#section-2__container p").innerText = paragraph;
}

let index = 0;

document.getElementById("carousel_buttons").addEventListener('click', (event) => {
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

const menuManager = () => {
    if (document.getElementById("app-canvas").dataset.menu === "off-screen") {
        document.getElementById("app-canvas").dataset.menu = "on-screen";
        document.getElementById("menu-toggle").src = "../src/assets/images/icon-close.svg";
    } else {
        document.getElementById("app-canvas").dataset.menu = "off-screen";
        document.getElementById("menu-toggle").src = "../src/assets/images/icon-hamburger.svg";
    }
}

document.getElementById("menu-toggle").addEventListener('click', (event) => {
    if (document.body.clientWidth <= "767.98") {
        menuManager();
    }
});