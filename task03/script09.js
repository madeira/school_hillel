"use strict";

// Используя вложенные циклы, сформируйте двумерный массив, 
// содержащий таблицу умножения:

let table = {}

for (let i = 0; i < 10; i++) {
    
    table[i] = {}
    
    for (let y = 1; y <= 10; y++) {
        table[i][y] = `${i+1} х ${y} = ${(i+1) * y}` ;
    }
    
};

console.log(table);
