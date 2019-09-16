"use strict";

// Изучите перебирающие методы массивов: forEach, filter, map.
// Создайте массив объектов users (~10 объектов), каждый объект имеет поля 
// firstname, lastname, age с разными значениями. Используя встроенные 
// функции массивов:
// Отфильтруйте пользователей младше 18 лет
// Добавьте каждому объекту поле fullName, которое является конкатенацией
// имени и фамилии
// Сформируйте новый массив, который содержит только полное имя пользователей

let users = [
    {
        firstname: 'firstname1',
        lastname: 'lastname1',
        age: 10
    },
    {
        firstname: 'firstname2',
        lastname: 'lastname2',
        age: 12
    },
    {
        firstname: 'firstname3',
        lastname: 'lastname3',
        age: 14
    },
    {
        firstname: 'firstname4',
        lastname: 'lastname4',
        age: 16
    },
    {
        firstname: 'firstname5',
        lastname: 'lastname5',
        age: 18
    },
    {
        firstname: 'firstname6',
        lastname: 'lastname6',
        age: 20
    },
    {
        firstname: 'firstname7',
        lastname: 'lastname7',
        age: 22
    },
    {
        firstname: 'firstname8',
        lastname: 'lastname8',
        age: 24
    },
    {
        firstname: 'firstname9',
        lastname: 'lastname9',
        age: 26
    },
    {
        firstname: 'firstname10',
        lastname: 'lastname10',
        age: 28
    },
]

users.filter((value) => {
    if (value.age < 18) console.log(value);
});

users.forEach((value, index, array) => {
    value.fullname = value.firstname + value.lastname;
});

let fullNameUsers = users.map((item, index, users)=>{
    return {
        fullname: item.fullname
    };
});

console.log(fullNameUsers);
