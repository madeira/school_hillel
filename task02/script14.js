"use strict";

// Напишите цикл с шагом 1, в теле которого распечатываются
// квадраты каждого четного значения счетчика.

for (let i = 1; i <= 10; i++) {
    if (!(i%2)) {
        console.log(`i = ${i}, i^2 = ${Math.pow(i, 2)}`);
    };
};
