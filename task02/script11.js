"use strict";

// В переменной month хранится текущий месяц (new Date()). 
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let date = new Date();
let month = date.getMonth();

if ( month <= 2 || month == 11 ) {
    alert ('Winter');
} else if  (month >= 3 || month <= 5 ) {
    alert ('Spring');
} else if ( month >= 6 || month <= 8 ) {
    alert ('Summer');
} else if ( month >= 9 || month <= 10 ) {
    alert ('Outme');
}
