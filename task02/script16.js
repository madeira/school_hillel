"use strict";

// Напишите цикл с confirm, который продолжается 
// при нажатии на Отмена и прерывается при нажатии на Ok.

for (;;) {
    let status = confirm(`Choice OK or cancel`);
    if (status) {
        break;
    }
}
