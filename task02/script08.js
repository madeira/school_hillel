"use strict";

// Если переменная x больше 2 и меньше 11, или переменная y 
// больше или равна 6 и меньше 14, то увеличьте x на 2, иначе 
// прибавьте к x число 5. Выведите новое значение переменной на экран.

let x = +prompt ('Enter a variable x');

if (x > 2 && x < 11 || y >=6 && y < 14) {
    x = x*2;
    alert (`x = ${x}`);
} else {
    x = x + 5;
    alert (`x = ${x}`);
};
