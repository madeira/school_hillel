"use strict";

// В окно prompt вводится число. Напишите цикл, в котором суммируются
// все нечетные числа до диапазона, введенного пользователем. 
// Результат отобразите в окне alert.

let number = +prompt(`Enter a number`);
let summ = 0;

for (let i = 0; i <= number; i++) {
    if (i%2) {
        summ = summ + i;
    }
}

alert(summ);
