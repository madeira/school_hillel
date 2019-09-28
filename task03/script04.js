"use strict";

// Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в правильном порядке с 
// помощью любых методов массива (indexOf, splice ...). Затем объедините 
// элементы массива в строку и выведите в alert исходный и итоговый варианты.

let userString = 'Как однажды Жак звонарь сломал фонарь головой';
let wordsArray = userString.split(' ');
let deleted = [];

for (let i = 0; i <= wordsArray.length; i++) {
    if (wordsArray[i] == 'сломал'){
        deleted = wordsArray.splice(0, i);
    };
};

wordsArray.unshift(wordsArray.pop());

for (let i = 1; i <= deleted.length; i++) {
    wordsArray.unshift(deleted[deleted.length - i]);
};

alert(wordsArray.join(' '));
