"use strict";

// Напишите функцию setComment с параметрами: date, message, author.
// Дата и текст сообщения - обязательные параметры, если какой-то из
// них или оба отсутствуют, то выполнение функции должно обрываться, 
// а пользователю выдаваться предупреждение (alert) о том, что данные
// переданы некорректно. Параметр author - опциональный, но должна 
// происходить проверка: если параметр не передан, то вместо него подставляется
// значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
// <имя_автора>, <дата> 
// <текст_сообщения></текст_сообщения>

function setComment(date, message, name) {
    let author = name || 'Anonymous';

    if (!date) return console.log('Enter a date');
    if (!message) return console.log('Enter a message');

    return console.log(`${author}, ${date} \n\r${message}`);
}

setComment('2016-11-02', 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');