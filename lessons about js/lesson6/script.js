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

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyStr = ' dirty string   ';
console.log(dirtyStr.replaceAll(" ", ""));

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
*/

let arrNums = [10,8,-7,55,987,-1011,0,1050,0];

let numToStr = arrNums.map(element => {
    return element.toString();
});

console.log(numToStr);

/*
- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];

sortNums(nums,'ascending') // [3,11,21]
*/
function  sortNums(array, callback){
    return callback(array);

}
console.log(sortNums(arrNums, (array)=> {
    return array.sort((a, b)=> a-b);
}));


/*sortNums(nums,'descending') // [21,11,3]*/

console.log(sortNums(arrNums, (array)=> {
    return array.sort((a, b)=> b-a);
}));

/*================================================================================================================*/
/*- є масив*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];


/*-- відсортувати його за спаданням за monthDuration*/

let fallMonthDuration = coursesAndDurationArray.sort((a, b)=>b['monthDuration']-a['monthDuration']);
console.log(fallMonthDuration);






/*-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців*/

let fifeMonth = coursesAndDurationArray.filter((element)=> element['monthDuration'] === 5);
console.log(fifeMonth);




/*-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}*/

let unshiftArr = coursesAndDurationArray.map((item, i)=>{
    let newUser = {id: i+1,
                   title: item.title,
                   monthDuration: item.monthDuration
    }
    return newUser;
});
console.log(unshiftArr);


/*
===================================================================================================================
*/


/*описати колоду карт (від 6 до туза без джокерів)
*/


      /*cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
      value: '', // '6'-'10', 'ace','jack','queen','king','joker'
      color:'', // 'red','black'*/

let value = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace', 'joker'];
let color = ['red', 'black'];
let cardSuit = ['spade', 'diamond', 'heart', 'clubs'];


function deckOfCards (value, cardSuit, color) {
    let deck = [];
    for (let i = 0; i < value.length; i++) {
        if(value[i] === 'joker'){
            break;
        }
        for (const suitElem of cardSuit) {
                if(suitElem === 'diamond' || suitElem === 'heart') {
                    let card = {
                        value: value[i],
                        color: color[0],
                        cardSuit: suitElem
                    }
                    deck.push(card);
                }
                    else {
                    let card = {
                        value: value[i],
                        color: color[1],
                        cardSuit: suitElem
                    }
                    deck.push(card);
                    }
                }
            }
    return deck;
}

let myCards = deckOfCards(value, cardSuit, color);
console.log(deckOfCards(value, cardSuit, color));

/*- знайти піковий туз*/

let findAce = myCards.find(elem => elem['value'] === 'ace' || elem['value'] === 'spade');
console.log(findAce);





/*- всі шістки*/
let findSix = myCards.filter(elem => elem['value'] === 6);
console.log(findSix);



/*- всі червоні карти*/
let findRed = myCards.filter(elem => elem['color'] === 'red');
console.log(findRed);




/*- всі буби*/
let findBuba = myCards.filter(elem => elem['cardSuit'] === 'diamond');
console.log(findBuba);


/*- всі трефи від 9 та більше*/
function filterKrest(array){
    let findKrest = array.filter(elem => elem['cardSuit'] === 'clubs');
    let findKrest2 = findKrest.filter(elem => elem['value'] > 8 || typeof elem['value'] === 'string');
    return findKrest2;
}

console.log(filterKrest(myCards));

/*
Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
}
*/


let reduceSuite =  myCards.reduce((accumulator, obj) => {
    if(obj.cardSuit === 'spade'){
        accumulator.spade.push(obj);
    }else if(obj.cardSuit === 'diamond'){
        accumulator.diamond.push(obj);
    }else if(obj.cardSuit === 'heart'){
        accumulator.heart.push(obj);
    }else if(obj.cardSuit === 'clubs'){
        accumulator.clubs.push(obj);
    }
    return accumulator;
}, {spade: [], diamond: [], heart: [], clubs: []});

console.log(reduceSuite);
/*===============================================================================================================*/
/*взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray*/


let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

/*--написати пошук всіх об'єктів, в який в modules є sass*/

let filterSass = coursesArray.filter(item => item['modules'].includes("sass"));
console.log('filterSass');
console.log(filterSass);


/*--написати пошук всіх об'єктів, в який в modules є docker*/

let filterDocker = coursesArray.filter(item => item['modules'].includes("docker"));
console.log('filterDocker');
console.log(filterDocker);



















