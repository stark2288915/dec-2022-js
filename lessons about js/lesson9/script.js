//- створити блок,

let blockDiv = document.createElement('div');


//- додати йому класи wrap, collapse, alpha, beta

blockDiv.classList.add('wrap', 'collapse', 'alpha', 'beta');


//- додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту

blockDiv.style.background = 'green';
blockDiv.style.color = 'red';
blockDiv.style.fontSize  = '30px';
blockDiv.innerText = 'Hello';

//- додати цей блок в body.

document.body.appendChild(blockDiv);


//- клонувати його повністю, та додати клон в body.
document.body.appendChild(blockDiv.cloneNode(true));



/*- Є масив:
    ['Main','Products','About us','Contacts']
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/


let arrLi = ['Main','Products','About us','Contacts'];

let ulList = document.createElement('ul');

document.body.appendChild(ulList);

for (const elem of arrLi) {
    let li = document.createElement('li');
    li.innerText = elem;
    ulList.append(li);
}





//- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

//Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
//Завдання робити через цикли.

for (const elem of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.innerText = `${elem['title']}: ${elem['monthDuration']}`;
    document.body.appendChild(div);
}

document.write('</br>');
document.write('==============================================================================================');
document.write('</br>');

//==============================================================================================

//- Є масив
/*let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];*/


//За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//Завдання робити через цикли.


for (const elem of coursesAndDurationArray) {
    let div = document.createElement('div');
    div.classList.add('item');

    let h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = elem['title'];

    let p = document.createElement('p');
    p.classList.add('description');
    p.innerText = elem['monthDuration'];

    document.body.appendChild(div);
    div.append(h1, p);
}

document.write('</br>');
document.write('==============================================================================================');
document.write('</br>');

//=================================================================================================
/*
- є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
    Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту*/

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];


for (const elem of simpsons) {
    document.write('<hr>');

    let div = document.createElement('div');
    div.classList.add('member');

    let h3 = document.createElement('h3');
    h3.innerText = `${elem['name']} ${elem['surname']}`;

    let divAge = document.createElement('div');
    divAge.innerText = `Вік: ${elem['age']}`;

    let p = document.createElement('p');
    p.innerText = elem['info'];

    let img = document.createElement('img');
    img.src = elem['photo'];


    document.body.appendChild(div);
    div.append(h3, divAge, p, img);
}


document.write('</br>');
document.write('==============================================================================================');
document.write('</br>');

//=================================================================================================

//Цикл в циклі
//- Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)

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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
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
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];


//Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
//Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

for (const elem of coursesArray) {
    let divGeneral = document.createElement('div');


    let h1 = document.createElement('h2');
    h1.innerText = elem['title'];

    let div1 = document.createElement('div');
    div1.innerText = `monthDuration: ${elem['monthDuration']}`;

    let div2 = document.createElement('div');
    div2.innerText = `hourDuration: ${elem['hourDuration']}`;

    let h3ul = document.createElement('h3');
    h3ul.innerText = 'modules:';

    let ul = document.createElement('ul');


    for (const elemLi of elem['modules']) {
        let li = document.createElement('li');
        li.innerText = elemLi;
        ul.append(li);
    }

    document.body.appendChild(divGeneral);
    divGeneral.append(h1, div1, div2, h3ul, ul);
}

document.write('</br>');
document.write('==============================================================================================');
document.write('</br>');

//=================================================================================================


//- Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let someText = document.createElement('div');
someText.innerText = 'Hello Okten';
someText.id = 'text';

document.body.appendChild(someText);

let button = document.createElement('button');
document.body.appendChild(button);


//- створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

//Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
//(Додатковачастина для завдання)



