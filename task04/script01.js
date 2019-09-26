"use strict";

// Напишите функцию max, которая сравнивает два числа и возвращает большее:
// console.log( max(0, -1) ); // 0

function max (x, y){

    if (x < y) {
        return y;
    } else {
        return x;
    }
};

console.log( max(0, -1) ); // 0
