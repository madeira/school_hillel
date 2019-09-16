"use strict";

// Чтобы добраться домой, вас устраивают маршрутки
// номер 7, 225 и 255. Какая маршрутка приехала – определяется 
// в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.

let busNumber = +prompt('Enter some number of the bus ( your number is 7, 225, 255)');

if ( busNumber == 7 || busNumber == 225 || busNumber == 255 ) {
    alert('You are going to home');
} else {
    alert('not your bus');
};
