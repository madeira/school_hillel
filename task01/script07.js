"use strict";

// Запишите в переменную случайное число (Math.random()), 
// умножьте его на 100 и округлите. Получите второе число из окна prompt.
// Сравните и отобразите в модальном окне: первое число меньше второго или нет,
// а также оба значения.

let randomNumb = Math.random();

randomNumb = Math.round(randomNumb * 100);

let userNumb = +prompt("Enter a number:");

if (randomNumb < userNumb) {
    alert(`Random number is ${randomNumb}
    \r\nand your namber is ${userNumb}
    \r\n ${randomNumb} < ${userNumb} `)
} else {
    alert(`Random number is ${randomNumb}
    \r\nand your namber is ${userNumb}
    \r\n ${randomNumb} >= ${userNumb} `)
}
