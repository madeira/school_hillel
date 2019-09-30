"use strict";

// Создайте объект counter с методами увеличения, уменьшения значения
// счетчика и методом возврата текущего значения. Используйте концепцию
// chaining для создания цепочки вызовов.

let counter = {
    count: 0,
    inc: function() {
        this.count++;
        return this;
    },
    dec: function() {
        this.count--;
        return this;
    },
    getValue: function() {
        console.log(this.count);
        return this;
    }
};
