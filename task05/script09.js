"use strict";

// Придумайте алгоритм расчета суммы всех фактических параметров функции
// с использованием только рекурсии:

function sum(...params) {
    if (params.length == 0) {
        return
    } else {
        let up = 0;
        for (let item of params) {
            up += params[params.length - 1];
            params.pop()
            sum(params);
        }
        return up;
    };
};

console.log( sum(1, 2, 3, 4, 5) ); // 15