"use strict";

// Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его элементов, 
// возведенные в пятую степень, не используя функцию Math.pow().

let n = prompt('enter a number of massive element');
let numbers = [];

for (let i = 0; i < n; i++) {
    let x = Math.random();
    x = x.toFixed(3) * 10;
    numbers.push(+x);
};

for (const key of numbers) {
    let numb = key;

    for (let i = 1; i <= 5; i++) {
        numb = numb * key;
    }

    console.log(numb);
}
