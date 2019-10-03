"use strict";

// Напишите функцию, которая возвращает куб переданного числа,
// аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:

function cub(x) {
    let count = x;

    for (let i = 1; i < 3; i++) {
        count = count * x;
    }

    return count;
}

console.log(cub(2));
console.log(cub(3));

function cub2(x, n = 3) {
    if (n == 1) {
        return x;
    } else {
        return x * cub2(x, n - 1);
    }
}

console.log(cub2(2));
console.log(cub2(3));
