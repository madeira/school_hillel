"use strict";

// С помощью цикла for с пустым телом сформируйте строку, 
// представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 

let i = 0;
let y = 1;
let sum = '';
let z;

for (; y <= 1000; z = i + y, i = y, y = z, sum += i + ' ' ) {}

console.log(sum);
