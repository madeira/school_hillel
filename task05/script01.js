"use strict";

// Создайте объект calculator с методами:
// read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// sum() возвращает сумму этих двух значений
// multi() возвращает произведение этих двух значений
// diff() возвращает разницу
// div() возвращает частное

let calculator = {
    x: 0,
    y: 0,
    read: () => {
        this.x = +prompt('Enter x') || 0;
        this.y = +prompt('Enter y') || 0;
    },
    sum: () => {
        console.log(this.x + this.y);
    },
    multi: () => {
        console.log(this.x * this.y);
    },
    diff: () => {
        console.log(this.x - this.y);
    },
    div: () => {
        console.log(this.x / this.y);
    }
}
