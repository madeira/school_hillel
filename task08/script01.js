"use strict";

// Необходимо получить данные с сервера по урлу
// https://trevadim.github.io/vue/data/data.json, 
// и отобразить информацию о планетах


const url = 'https://trevadim.github.io/vue/data/data.json';
const body = document.querySelector("body");

let createTitle = (title) => {
    let strong = document.createElement("h2");
    strong.innerHTML = title;
    strong.style.textAlign = "center";
    body.appendChild(strong);
};

let createInfo = ([info]) => {
    let text = document.createElement("p");
    text.innerHTML = info;
    text.style.maxWidth = "800px";
    text.style.margin = "0 auto 40px";
    body.appendChild(text);
};

let createImg = (img) => {
    let picture = document.createElement("div");
    picture.innerHTML = `<img src="${img}" style="max-width: 200px; "alt="">`;
    picture.style.textAlign = "center";
    picture.style.margin = "0 0 40px";
    body.appendChild(picture);
};

let createMarkUp = ({planets}) => {

    for (const key in planets) {
        if (planets.hasOwnProperty(key)) {
            createTitle(planets[key].title);
            createImg(planets[key].url);
            createInfo(planets[key].info);
        }
    }
};

fetch(url)
    .then(response => response.json())
    .then(data => createMarkUp(data))
    .catch(error => console.log(error));
