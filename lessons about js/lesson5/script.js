/*ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б*/
let squareRectangle = (a, b)=> a * b;

//- створити функцію яка обчислює та повертає площу кола з радіусом r

let squareCircle = (r) => 3.14 * (r * r);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

let squareCylinder = (h, r)=> 2 * (3.14*(r * h));


//- створити функцію яка приймає масив та виводить кожен його елемент

let numbers = [1,2,3,4,5,6,7,8,9];


let showElements = (array) =>{
    for (let element of array){
        document.write(element);
    }
}


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент

let someParagraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dicta, dolore doloribus eius esse fuga impedit ipsum itaque magnam maxime molestias perspiciatis quos ratione rem sunt, suscipit tempore totam.';

let paragraph = (par)=> document.write(`<p>${par}</p>`);


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let car = "lancer 9";
let list = (li) =>
    document.write(`<ul>
               <li>${li}</li>
               <li>${li}</li>
               <li>${li}</li>
            </ul>`);


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let myCar = "Mitsubishi";
let list2 = (text)=> {
    document.write(`<ul>`);
    for(i = 0; i < 3; i++){
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}



//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let simpleArray = [10, 'hello', true, 50, 'Lviv', false, 'Kyiv', true, 66, false];

let forSimpleArray = (array) => {
    document.write(`<ul>`);
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`);
    }
    document.write(`</ul>`);
}




//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {id: 0, name: 'Sergey', age: 27},
    {id: 1, name: 'Alex', age: 21},
    {id: 2, name: 'Ylia', age: 35},
    {id: 3, name: 'Mark', age: 18},
    {id: 4, name: 'Miron', age: 56},
    {id: 5, name: 'Vasya', age: 43}
];

let usersList = (array) => {
    for (const arrayElement of array) {
        document.write(`<ul>`)
        for (const arrayElementKey in arrayElement) {
            document.write(`<li>${arrayElementKey}: ${arrayElement[arrayElementKey]}</li>`)
        }
        document.write(`</ul>`)

    }
}




//- створити функцію яка повертає найменьше число з масиву

let numbers2 = [8,9,3,5,4,7,3,1];
let searchLittleNum = (array) => {
    let min = array[0];
    for (const element of array) {
        if(min > element){
            min = element;
        }
    }
    document.write(`Мінімальне число масиву: ${min}`);
    return min;
}

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

let arrayForSum = [10, 20, 30, 40, 50, 60, 70, 80, 90]
let sum = (array) => {
    let result = 0;
    for (const arrayElement of array) {
        result += arrayElement;
    }
    document.write(`Сума масиву: ${result}`);
    return result;
}




//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах. Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap = (arr,index1,index2) => {
    let element1 = arr[index1];
    let element2 = arr[index2];
    arr[index1] = element2;
    arr[index2] = element1;
    return arr;
}


//- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency). Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

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


let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    for (const element of currencyValues) {

        if(exchangeCurrency === element['currency']){
            let result = sumUAH / element['value'];
            document.write(`${sumUAH}грн = ${result}${element['currency']}`);
            return result;
        }
    }
}

