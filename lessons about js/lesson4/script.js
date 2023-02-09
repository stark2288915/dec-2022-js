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
        console.log(element);
    }
}

/*- створити функцію яка створює параграф з текстом. Текст задати через аргумент*/

let someParagraph = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa dicta, dolore doloribus eius esse fuga impedit ipsum itaque magnam maxime molestias perspiciatis quos ratione rem sunt, suscipit tempore totam.';
function paragraph(par){
    document.write(`<p>${par}</p>`);
}

/*- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий*/

let car = "lancer 9";
function list(li){
    document.write(`<ul>
               <li>${li}</li>
               <li>${li}</li>
               <li>${li}</li>
            </ul>`);
}

/*
- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
*/

let myCar = "Mitsubishi";
function list2(text){
    for(i = 0; i < 7; i++){
        document.write(`<ul>
                           <li>${text}</li>
                           <li>${text}</li>
                           <li>${text}</li>
                        </ul>`);
    }
}


/*


- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
- створити функцію яка повертає найменьше число з масиву
- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250*/
