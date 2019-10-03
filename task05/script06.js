"use strict";

// Создайте объект user с полем name. Создайте функцию format
// с параметрами start и end:
// Привяжите функцию format() к объекту user таким образом, чтобы
// ее вызов возвращал отформатированное имя пользователя
// Реализуйте 2 версии текущего задания, используя:
// 1. Анонимную функцию;
// 2. Метод bind().

let user = {
    name: 'John',
};

function format(start, end) {
    console.log(start + this.name + end);
};

let userFormat = format.bind(user);
userFormat('<<<', '>>>');
let userFormat2 = (start, end) => format.call(user, start, end);
userFormat2('<<<', '>>>');
