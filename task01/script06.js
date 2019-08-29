"use strict";

// Напишите программу, которая проверяет, является ли значение, 
// введенное пользователем, числом.

let numb;

numb = prompt("Enter a number:", "8");

if (numb == +numb ) {
    alert('It was a number.');
} else  if (numb !== null) {
    alert('It was not a number.');
};
