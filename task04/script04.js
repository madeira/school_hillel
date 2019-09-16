"use strict";

// Напишите функцию аналог метода массива shift. 
// Функция удаляет из переданного в параметре массива первый элемент.

function myShift(x) {
    x.splice(0, 1);

    return x;
}

console.log(myShift([1, 2, 3, 4, 5, 6, 7]));
