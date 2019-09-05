"use strict";

// Переменная lang может принимать два значения: 'ru' и 'en'. 
// Переменная day принимает значение от 0 до 6-ти. 
// Если lang имеет значение 'ru', то в переменную result запишите название
//  дня недели на русском языке в соответствии со значением переменной 
// day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). 
// Если же lang имеет значение 'en' – то аналогично, 
// но день недели будет на английском.

let lang = prompt('Choise lang \'ru\' \'en\'');
let day = +prompt('Choise day 0 - 6');

if ( lang == 'ru' ) {
    if ( day == 0 ) {
        alert('воскресенье');
    } else if ( day == 1 ){
        alert('понедельник');
    } else if ( day == 2 ){
        alert('вторник');
    } else if ( day == 3 ){
        alert('среда');
    } else if ( day == 4 ){
        alert('четверг');
    } else if ( day == 5 ){
        alert('пятница');
    } else if ( day == 6 ){
        alert('суббота');
    } else {
        alert('неправильное число дня');
    }
} else if ( lang == 'en' ) {
    if ( day == 0 ) {
        alert('sunday');
    } else if ( day == 1 ){
        alert('monday');
    } else if ( day == 2 ){
        alert('tusday');
    } else if ( day == 3 ){
        alert('wensday');
    } else if ( day == 4 ){
        alert('thesday');
    } else if ( day == 5 ){
        alert('friday');
    } else if ( day == 6 ){
        alert('suterday');
    } else {
        alert('wrong day number');
    }
} else {
    alert('wrong lang');
}
