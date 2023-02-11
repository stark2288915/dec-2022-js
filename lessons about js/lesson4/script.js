/*- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/

function squareRectangle(a, b) {
    return a * b;
}
/*- створити функцію яка обчислює та повертає площу кола з радіусом r*/

function squareCircle(r){
    return 3.14 * (r * r);

}


/*- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r*/

function squareCylinder(h, r){
    return 2 * (3.14*(r * h));
}

/*- створити функцію яка приймає масив та виводить кожен його елемент*/

let numbers = [1,2,3,4,5,6,7,8,9];


function showElements (array){
    for (let element of array){
        document.write(element);
    }
}

showElements(numbers);

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

let someParagraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dicta, dolore doloribus eius esse fuga impedit ipsum itaque magnam maxime molestias perspiciatis quos ratione rem sunt, suscipit tempore totam.';
function paragraph(par){
    document.write(`<p>${par}</p>`);
}

paragraph(someParagraph);

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

let car = "lancer 9";
function list(li){
    document.write(`<ul>
               <li>${li}</li>
               <li>${li}</li>
               <li>${li}</li>
            </ul>`);
}

list(car);

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

let myCar = "Mitsubishi";
function list2(text){
    document.write(`<ul>`);
    for(i = 0; i < 3; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}
list2(myCar);


/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список*/

let simpleArray = [10, 'hello', true, 50, 'Lviv', false, 'Kyiv', true, 66, false];

function forSimpleArray(array){
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}

forSimpleArray(simpleArray);

/*
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
*/


let users = [
    {id: 0, name: 'Sergey', age: 27},
    {id: 1, name: 'Alex', age: 21},
    {id: 2, name: 'Ylia', age: 35},
    {id: 3, name: 'Mark', age: 18},
    {id: 4, name: 'Miron', age: 56},
    {id: 5, name: 'Vasya', age: 43}
];

function usersList(array){
    for (const arrayElement of array) {
        document.write(`<ul>`)
        for (const arrayElementKey in arrayElement) {
            document.write(`<li>${arrayElementKey}: ${arrayElement[arrayElementKey]}</li>`)
        }
        document.write(`</ul>`)

    }
}

usersList(users);

/*- створити функцію яка повертає найменьше число з масиву*/
document.write(`<br>`);
let numbers2 = [8,1,3,5,4,7,3,9];
function searchLittleNum(array){
    let min = 9999999;
    for (const Element of array) {
        if(min > Element){
            min = Element;
        }
    }
    document.write(`Мінімальне число масиву: ${min}`);
    return min;
}
searchLittleNum(numbers2);




/*
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
*/
document.write(`<br>`);
let arrayForSum = [10, 20, 30, 40, 50, 60, 70, 80, 90]
function sum(array){
    let result = 0;
    for (const arrayElement of array) {
        result += arrayElement;
    }
    document.write(`Сума масиву: ${result}`);
    return result;
}
sum(arrayForSum);
document.write(`<br>`);

/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/

function swap(arr,index1,index2){
    let element1 = arr[index1];
    let element2 = arr[index2];
    arr[index1] = element2;
    arr[index2] = element1;
    return arr;
}
swap(arrayForSum, 2,3);



/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
let currency = [
    {
        currency:'USD',
        value:40
    },
    {
        currency: 'EUR',
        value: 42
    },
    {
        currency: 'PLN',
        value: 8
    },
    {
        currency: 'GBP',
        value: 45
    },
    {
        currency: 'CHF',
        value: 40
    }
];

document.write(`<br>`);

function exchange(sumUAH,currencyValues,exchangeCurrency){

    for (const Element of currencyValues) {

            if(exchangeCurrency === Element['currency']){
                let result = sumUAH / Element['value'];
                document.write(`${sumUAH}грн = ${result}${Element['currency']}`);
                return result;
            }
    }
}

exchange(16, currency, 'PLN');


