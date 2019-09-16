"use strict";

// Напишите функцию аналог метода Object.assign(). Первый параметр 
// функции - целевой объект, поля которого будут изменены или расширены. 
// Остальные параметры - объекты-источники, полями которых будет 
// расширяться целевой объект.
// var source = {firstname: 'Tom', age: 10}
// var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

let source = {firstname: 'Tom', age: 10}

function extend(obj, ...param) {
    for (const key of param) {
        for (const item in key) {
            obj[item] = key[item];
        }
    }

    return obj;
}

let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
