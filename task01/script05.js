"use strict";

// Напишите программу, которая без использования оператора сравнения
// определяет, является ли число, введенное пользователем, нечётным.

let numb = +prompt("Enter a number:");

if (numb%2) {
    alert(`you number ${numb} is odd`);
} else {
    alert(`you number ${numb} is even`);
}
