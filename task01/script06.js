"use strict";

// Напишите программу, которая проверяет, является ли значение, 
// введенное пользователем, числом.

let numb;

numb = prompt("Enter a number:", "8");

if (!(isNaN(numb))) {
    alert('It was a number.');
} else {
    alert('It was not a number.');
};
