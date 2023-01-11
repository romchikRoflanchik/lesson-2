let count = 0;
console.log('Count =', count);
let ask = prompt(`Яке ім'я мав головний герой аніме "Наруто"`);
if (ask.toLowerCase() === "наруто") {
    count++;
    console.log(count, "points");
}
let ask2 = prompt(`Хто був вчителем Наруто`);
if (ask2.toLowerCase() === "джирая") {
    count++;
    console.log(count, "points");
}
let ask3 = prompt(`Як звати брата Саске`);
if (ask3.toLowerCase() === "ітачі") {
    count++;
    console.log(count, "points");
}
let ask4 = prompt(`Яке ім'я лиса`);
if (ask4.toLowerCase() === "курама") {
    count++;
    console.log(count, "points");
}
let ask5 = prompt(`Чи став Наруто хокаґе`);
if (ask5.toLowerCase() === "так") {
    count++;
    console.log(count, "points");
}
let ask6 = prompt(`Хініта краща за Сакуру?`);
if (ask6.toLowerCase() === "так") {
    count++;
    console.log(count, "points");
}
let ask7 = prompt(`Хто був батьком Наруто`);
if (ask7.toLowerCase() === "мінато") {
    count++;
    console.log(count, "points");
}
let ask8 = prompt(`Назва селища Наруто`);
if (ask8.toLowerCase() === "каноха") {
    count++;
    console.log(count, "points");
}
let ask9 = prompt(`З якого клану Наруто`);
if (ask9.toLowerCase() === "узумакі") {
    count++;
    console.log(count, "points");
}
let ask10 = prompt(`Дружина Наруто`);
if (ask10.toLowerCase() === "хіната") {
    count++;
    console.log(count, "points");
}
let score = count;
if (count === 0 || count === 1 || count === 2) {
    console.log('дуже погано')
}
if (count === 3 || count === 4 ) {
    console.log('погано')
}
if (count === 5 || count === 6 || count === 7) {
    console.log('добре')
}
if (count === 8 || count === 9 ) {
    console.log('дуже добре')
}
if (count === 10 ) {
    console.log('відмінно')
}





