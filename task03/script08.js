"use strict";

// Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt
// для ввода любых символов, полученное значение добавляйте в конец созданного
// массива. После выхода из цикла посчитайте сумму всех чисел массива и 
// выведите в alert полученный результат.

let massive = [];
let summ = 0;

for (;;) {
    let userNumber = +prompt('Введите число ');
    if (userNumber){
        massive.push(userNumber);
    } else {
        break;
    };
};

for (const key of massive) {
    summ = summ + Number(key);
};

alert(`Сумма чисел массива ${summ}`);
