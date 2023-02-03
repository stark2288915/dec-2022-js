/*
Масиви та об'єкти:

- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*/

/*- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль*/

let anyStaf = [false, "name", 10, true, undefined, "Lviv", 22, 44, 5.44, NaN];

/*- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.*/
let book1 = {
    title: "harry potter and the philosopher's stone",
    pageCount: 380,
    genre: "fantasy"
}

let book2 = {
    title: "The Lord of the Rings",
    pageCount: 503,
    genre: "high-fantasy"
}

let book3 = {
    title: "Treasure Island",
    pageCount: 432,
    genre: "adventure"
}

/*
- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
*/

let book4 = {
    title:"The Alchemist",
    pageCount: 678,
    genre: "adventure",
    author: {
        name: "Paulo Coelho",
        age: 45,
    }
}

let book5 = {
    title: "The Holy Bible.",
    pageCount: 543,
    genre: "faith",
    author: {
        name: "God",
        age: 33
    }
}

let book6 = {
    title: "The Holy Quran",
    pageCount: 765,
    genre: "faith",
    author: {
        name: "God2",
        age: 33
    }
}

/*
- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача*!/
*/

let users = [
    {name:'Sergey', username:'SergeyTheBest', password:'SergeyTheBest12345'},
    {name:'Vasya', username:'VasyaKoral', password:'VasyaKoral12345'},
    {name:'Petya', username:'PetyTypical', password:'PetyTypical12345'},
    {name:'Ivan', username:'IvanDrago', password:'IvanDrago12345'},
    {name:'Taras', username:'TarasSTO', password:'TarasSTO12345'},
    {name:'Luba', username:'LubaSubota', password:'LubaSubota12345'},
    {name:'Anna', username:'AnnaBaclajan', password:'AnnaBaclajan12345'},
    {name:'Anjela', username:'AnjelaKralya', password:'AnjelaKralya12345'},
    {name:'Max', username:'MaxPower', password:'MaxPower12345'},
    {name:'Alex', username:'Alex3000', password:'Alex300012345'},
];


console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

/*
Логічні розгалуження:
    - Є змінна х, якій ви надаєте довільне числове значення.
    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
*/

let x = 10;
let a = 0;
if(x != a && a === 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

a = 1;

if(x != a && a === 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

a = -3;

if(x != a && a === 0){
    console.log('Вірно');
}else {
    console.log('Невірно');
}

/*- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
(в першу, другу, третю или четверту частину години).*/

let time = 50;

if(time <= 15){
    console.log('Зараз перша четверть години.');
} else if (time >= 16 && time <= 30){
    console.log('Зараз друга четверть години.');
} else if (time >= 31 && time <=46){
    console.log('Зараз третя четверть години.');
} else {
    console.log('Зараз четверта четверть години.');
}

/*
- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
*/

let day = 27;
if(day <= 10){
    console.log('Зараз перша декада місяця.');
} else if (time >= 11 && time <= 20){
    console.log('Зараз друга декада місяця.');
} else {
    console.log('Зараз третя декада місяця.');
}

/*
- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
*/
let i = 8;
switch (i){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Треба ввести від 1 до 7, тому що в тижні 7 днів');
}

/*
- Користувач вводить або має два числа.
    Потрібно знайти та вивести максимальне число з тих двох .
    Також потрібно врахувати коли введені рівні числа.
*/

let firstNum = 10;
let secondNum = 10;

if(firstNum > secondNum){
    console.log(firstNum);
} else if (firstNum < secondNum) {
    console.log(secondNum);
} else {
    console.log(`Чила рівні. ${firstNum}`);
}

/*
- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
    за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
*/

x = NaN;

if(!x){
    x = 'default';
    console.log(x);
}




