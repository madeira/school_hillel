"use strict";

// Напишите функцию-аналог Math.min(). Функция принимает любое количество
// чисел и возвращает меньшее из них:
// console.log( min(0, -1, 100, 500, 100500) ); // -1

function min() {
    let arg = arguments[0];

    for (let i = 0; i < arguments.length; i++) {
        if (arg > arguments[i]) {
            arg = arguments[i];
        }
    };

    return arg;
};

console.log(min(0, -1, 100, 500, 100500));
