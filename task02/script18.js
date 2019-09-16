"use strict";

// Напишите бесконечный цикл, который прерывается при помощи команды break,
// когда Math.random() > 0.9. Выведите в окно alert случайное число, 
// прервавшее цикл, и количество итераций цикла.

let numb = 0;
let i = 0;

for (;;) {
    i++
    numb = Math.random();
    if  ( numb > 0.9) {
        break;
    };
};

alert(`Count of itteration is ${i}, number wich break itteration ${numb}`);
