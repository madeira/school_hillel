"use strict";

// В переменную day записан текущий день недели. 
// Если это не суббота и не воскресенье, выведите 
// в alert сообщение о необходимости идти на работу.

let d = new Date();
let toodayWeekDay = d.getDay();

if (toodayWeekDay == 5 || toodayWeekDay == 6) {
    alert ('You can have a rest');
} else {
    alert ('You must going to work');
};
