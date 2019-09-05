"use strict";

// Создайте три переменные с любыми числовыми значениями.
// Используя условный оператор и не используя логические,
// найдите минимальное число и отобразите на экране имя переменной и ее значение.

let a = 3;
let b = 3;
let c = 2;

if (a < b) {
    if (b < c) {
        alert(`a = ${a}, b = ${b}, c = ${c} minimum number is a = ${a}`);
    } else {
        alert(`a = ${a}, b = ${b}, c = ${c} minimum number is c = ${c}`);
    };
} else if (b < c) {
    alert(`a = ${a}, b = ${b}, c = ${c} minimum number is b = ${b}`);
} else if (c < a){
    alert(`a = ${a}, b = ${b}, c = ${c} minimum number is c = ${c}`);
};
