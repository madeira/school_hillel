"use strict";

// Используя замыкание, напишите функцию createTimer, которая использует
// метод performance.now() для получения текущей временной метки и служит
// для замера времени выполнения другого кода:
//
// var timer = createTimer();
// alert('!')  // код, время выполнения которого нужно измерить
// alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()

function createTimer() {
    let startTime = performance.now();
    
    return function () {
        let endTime = performance.now();
        let delta = endTime - startTime;

        return (`delta was ${delta/1000} sec`);
    };
};

var timer = createTimer();
alert('!')
alert( timer() );
