"use strict";

// Придумайте алгоритм расчета суммы всех фактических параметров функции
// с использованием только рекурсии:

function sum(...params) {
    let x = 0;
    if (params.length == 0) {
        return x;
    } else {
        x += +params[params.length - 1];
        params.pop();
        return x + sum(...params);
    }
};

console.log( sum(1, 2, 3, 4, 5) ); // 15