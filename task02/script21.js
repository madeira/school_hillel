"use strict";

// Запустите цикл, в котором пользователю предлагается вводить число
// с клавиатуры, до тех пор, пока не будет нажата Отмена. После выхода
// из цикла распечатайте количество введенных чисел, их общую сумму и среднее 
// арифметическое.

let numb = 0;
let i = 0

for (i = 1;; i++) {
    let userNumb = +prompt(`Enter a number:`);
    if (userNumb){
        numb = numb + userNumb;
    } else {
        i = i - 1;
        break;
    };
};

console.log(`number of a count is ${i}, summ of this number ${numb}`);
