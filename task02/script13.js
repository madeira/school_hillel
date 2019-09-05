"use strict";

//Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.

let str = ""

for (let i = 1; i <= 11; i++) {
    if (i%2){
        str = str + '.';
    } else {
        str = str + '#';
    }
}

alert(str);
