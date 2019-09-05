"use strict";

// Запросите из prompt переменные x и y значения от -20 до 20.
// Если переменная x равна или меньше 1, а переменная y больше 
// или равна 3 или меньше 0, то выведите сумму этих переменных, 
// иначе выведите 'Неверно!'.

let x = +prompt('Enter a number from -20 to 20, x', '1');
let y = +prompt('Enter a number from -20 to 20, y', '3');

if ( x <= 1 && y >= 3 || y<0) {
    alert('Not true');
} else {
    alert ('all right');
}
