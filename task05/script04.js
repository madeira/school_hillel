"use strict";

// Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, 
// getDiv. Методы объекта ничего не реализуют, а только выводят в alert 
// сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы
// используют функционал ранее созданного калькулятора.

let calculator = {
    x: 0,
    y: 0,
    read: function () {
        this.x = +prompt('Enter x') || 0;
        this.y = +prompt('Enter y') || 0;
    },
    sum: function() {
        return this.x + this.y;
    },
    multi: function() {
        return this.x * this.y;
    },
    diff: function() {
        return this.x - this.y;
    },
    div: function() {
        return this.x / this.y;
    }
}

let me = {
    x: 0,
    y: 0,
    getSum: function(x, y){
        this.x = x;
        this.y = y;
        let sum = calculator.sum.call(this, this.x, this.y);
        return `${this.x} + ${this.y} = ${sum}`;
    },
    getDiff: function(x, y){
        this.x = x;
        this.y = y;
        let diff = calculator.diff.call(this, this.x, this.y);
        return `${this.x} - ${this.y} = ${diff}`;
    },
    getMulti: function(x, y){
        this.x = x;
        this.y = y;
        let multi = calculator.multi.call(this, this.x, this.y);
        return `${this.x} * ${this.y} = ${multi}`;
    },
    getDiv: function(x, y){
        this.x = x;
        this.y = y;
        let div = calculator.div.call(this, this.x, this.y);
        return `${this.x} / ${this.y} = ${div}`;
    }
}
