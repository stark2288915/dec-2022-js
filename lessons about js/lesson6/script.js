//- Знайти та вивести довижину настипних стрінгових значень
//'hello world', 'lorem ipsum', 'javascript is cool'

let hw = 'hello world';
let li = 'lorem ipsum';
let jic = 'javascript is cool';

document.write(`${hw.length} <br/>`);
document.write(`${li.length} <br/>`);
document.write(`${jic.length} <br/>`);

//- Перевести до великого регістру наступні стрінгові значення
//'hello world', 'lorem ipsum', 'javascript is cool'
document.write(`${hw.toUpperCase()} <br/>`);
document.write(`${li.toUpperCase()} <br/>`);
document.write(`${jic.toUpperCase()} <br/>`);

//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let bighw = 'HELLO WORLD';
let bigli = 'LOREM IPSUM';
let bigjic = 'JAVASCRIPT IS COOL';

document.write(`${bighw.toLowerCase()} <br/>`);
document.write(`${bigli.toLowerCase()} <br/>`);
document.write(`${bigjic.toLowerCase()} <br/>`);

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів. !!!!!!!!!!!!!!!!!!!!!!!!!!!!!

let dirtyStr = ' dirty string   ';
document.write(`${dirtyStr.replace(" ", "")} <br/>`);
document.write(`${dirtyStr.length} <br/>`);


/*
- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

*/


let strSplit = 'Ревуть воли як ясла повні';
let arrSplit = strSplit.split(' ');

console.log(arrSplit);

/*
- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
sortNums(nums,'ascending') // [3,11,21]
sortNums(nums,'descending') // [21,11,3]
*/

let arrNums = [10,8,-7,55,987,-1011,0,1050,0];

let numToStr = arrNums.map(element => {

});