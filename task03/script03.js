"use strict";

//  Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
//  Добавьте в начало массива значение ‘Backbone.js’
//  Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
//  Добавьте в массив значение ‘CommonJS’ вторым элементом
//  Найдите и удалите из массива значение ‘jQuery’, выведите 
//  его в alert со словами “Это здесь лишнее”

let jsLibs = ['AngularJS', 'jQuery'];
jsLibs.unshift('Backbone.js'); // add in start
jsLibs.push('ReactJS', 'Vue.js'); // add in and
let deleted = jsLibs.splice(0, 1);
jsLibs.unshift('CommonJS');
jsLibs.unshift(deleted[0]);

for (let i = 0; i <= jsLibs.length; i++) {
    if (jsLibs[i] == 'jQuery'){
        alert(`${jsLibs[i]} а это сдесь лишнее`)
        deleted = jsLibs.splice(0, i);
        jsLibs.shift();
    };
};

for (let i = 1; i <= deleted.length; i++) {
    jsLibs.unshift(deleted[deleted.length - i]);
};

console.log(jsLibs);
