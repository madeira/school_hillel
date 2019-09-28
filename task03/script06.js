"use strict";

// Сгенерируйте объект, описывающий модель телефона, заполнив все свойства
// значениями, прочитанными из prompt (например: brand, model, resolution,
// color...), не используя вспомогательные переменные. Добавьте этот гаджет
// персоне, созданной ранее.

let mobile = {
    brand: '',
    model: '',
    resolution: '',
    color: ''
};

let person = {};

for (const key in mobile) {
    mobile[key] = prompt(`Enter a value for ${key}`);
}

person.mobile = mobile;
