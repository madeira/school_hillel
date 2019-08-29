"use strict";

// Создайте переменные firstName и lastName для хранение имени и фамилии, 
// запишите в них значения из модального окна prompt. 
// Выведите на экран приветствие (“What’s up John Doe”).

let firstName = prompt("Please, enter your first name:", "John");
let lastName = prompt("Please, enter your last name:", "Doe");

alert(`What's up ${firstName} ${lastName} ?`);
