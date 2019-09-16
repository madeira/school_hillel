"use strict";

// Напишите функцию аналог метода массива push. Функция добавляет 
// в конец переданного в параметре массив произвольное количество элементов.

function myPush(array, ...items) {
    for (let i = 0; i < items.length; i++) {
        array[array.length] = items[i];
    };

    return array;
};

console.log(myPush([1, 2, 3], 4, 5, 6));
