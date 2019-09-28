"use strict";

// Создайте объект dates для хранения дат. Первая дата – текущая, new Date.
// Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в 
// формате yyyy-MM-dd. Проверьте, попадает ли введенная дата в диапазон дат 
// объекта dates.

let dates = {
    nowDate: new Date(),
    otherDate: new Date().getFullYear() - 1,
};

let userDate = new Date(prompt('Enter a year:','yyyy-MM-dd'));

if (dates.nowDate > userDate && dates.otherDate < userDate) {
    alert('Попадает');
};
