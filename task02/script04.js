"use strict";

// В переменную age запишите возраст человека. 
// Если значение больше или равно 20 и меньше 27, 
// в alert выводится “Выслать повестку”.

let userAge = +prompt('Enter your age please');

if (userAge >= 20 && userAge < 27) {
    alert(`Send a summons`);
};
