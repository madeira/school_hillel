"use strict";

// Напишите в переменных формулу для расчета з/п за июль с учетом, 
// что количество рабочий часов, количество рабочих дней в неделе и рейт за 
// час – переменные значения и читаются из prompt.

let workHours = +prompt("How many working hours in a day ?", "8");
let workDaysInWeek = +prompt("How many working days in a week ?", "5");
let workRate = +prompt("What is your rate in a hour?", "5");

alert (`Your payment in july: \$${(workHours * workDaysInWeek) * 4 * 
        workRate}`);
