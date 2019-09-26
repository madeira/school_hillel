"use strict";

// Используя замыкания, создайте функцию createAdder(), которая принимает
// на вход любой примитивный параметр и возвращает функцию, которая добавляет
// к первому параметру второй. Функция работает по следующему принципу:
//
// var hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry
//
// var plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10

function createAdder(param) {
    let firstItem = param;
    
    return function (param2) {
        let delta = firstItem + param2;

        return delta;
    };
};
