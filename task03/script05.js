"use strict";

// Создайте ассоциативный массив person, описывающий персону,
// с произвольным количеством произвольных полей. С помощью оператора
// in или typeof проверьте наличие в объекте свойства, прочитанного из 
// prompt, и выведите его на экран. Если свойства нет, то добавляйте его
// в объект со значением, которое также запрашивается из prompt.

let user = {
    name: 'John',
    age: 32
};

let setting = prompt('Enter a setting:', 'name');

if (user[setting]) {
    alert(user[setting]);
} else {
    user[setting] = prompt('Enter a value:');
};

console.log(user);
