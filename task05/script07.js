"use strict";

// Напишите функцию concat, которая соединяет две строки, разделенные каким-то
// символом: разделитель и строки передаются в параметрах функции. Используя
// карринг, создайте новую функцию hello, которая которая выводит приветствие
// тому, кто передан в ее параметре:

function concat(text1, text2, divider = ' ') {
    return console.log(text1 + divider + text2);
}

concat('hello', 'hello2');

let hello = concat.bind(null, 'Hello');

hello('John');
