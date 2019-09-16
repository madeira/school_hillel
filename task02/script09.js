"use strict";

// Получите из prompt значение для имени пользователя. 
// Выведите на экран приветствие. Учтите вариант, что пользователь
// может не ввести ничего или нажать на Отмена.

let userName = prompt ('Enter user name:');

if (userName) {
    alert(`Your user name is ${userName}`);
} else {
    alert(`Wrong name ${userName}`);
};
