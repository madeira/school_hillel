"use strict";

// Необходимо получить данные с сервера по урлу
// https://trevadim.github.io/vue/data/data.json, 
// и отобразить информацию о планетах


const url = 'https://trevadim.github.io/vue/data/data.json';
const body = document.querySelector("body");

let createTitle = (title) => {
    let strong = document.createElement("strong");
    strong.innerHTML = title;
    body.appendChild(strong);
};

let createInfo = ([info]) => {
    let text = document.createElement("p");
    text.innerHTML = info;
    body.appendChild(text);
};

let createImg = (img) => {
    let picture = document.createElement("div");
    picture.innerHTML = `<img src="${img}" alt="">`;
    body.appendChild(picture);
};

let createMarkUp = ({planets}) => {
    console.log(planets);

    for (const key in planets) {
        console.log(key);
        if (planets.hasOwnProperty(key)) {
            createTitle(planets[key].title);
            createImg(planets[key].url);
            createInfo(planets[key].info);
            
        }
    }
    
    
    // for (const key in planets) {
    //     if (planets.hasOwnProperty(key)) {
    //         createTitle(key);
    //         console.log(key);
    //     }
    // }
    
};

fetch(url)
    .then(response => response.json())
    .then(data => createMarkUp(data))
    .catch(error => console.log(error));
