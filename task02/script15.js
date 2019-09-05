"use strict";

// Используя любой цикл, напишите программу, которая в консоли выводит
// текстовое поздравление. Программа поздравляет того, 
// чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you

let userName = prompt(`Enter user name:`, `John`);

for (let i = 0; i <= 3; i++) {
    if (i == 2) {
        console.log(`Happy birthday to you ${userName}`);
    } else {
        console.log(`Happy birthday to you`);
    };
};
