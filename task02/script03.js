"use strict";

// У вас и у вашего друга в кармане столько денег, 
// сколько было указано в окнах prompt. В зависимости от 
// общей суммы ваших сбережений вы можете полететь на Майорку 
// или выпить пива. С помощью условного оператора определите 
// ваши возможности и отобразите на экране в alert.

let firstFriendMoney = +prompt(`Money for first fiend:`,`100`);
let secondFriendMoney = +prompt(`Money for first fiend:`,`100`);
let budget = firstFriendMoney + secondFriendMoney;

if (budget < 200) {
    alert(`Go home and watch TV ;)`);
} else if (budget >= 200) {
    alert(`Take a botle of beer and be a good boy`);
} else if (budget >= 800) {
    alert(`Try to find more money for tourism`);
} else if (budget >= 50000) {
    alert(`You can go to Mayorka`);
};
