/*
- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

let arrayUsers = [];
function User(id, name, surname, email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

function createUsers(array, quantity){
    for(i = 0; i < quantity; i++){
        array.push(new User(i, 'Sergey', 'Tsvetkov', 'stark2288915@gmail.com', '0999834750'));
    }
}
createUsers(arrayUsers, 10);
console.log(arrayUsers);





/*- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)*/

let pairIdUsers = arrayUsers.filter(elem => elem['id'] % 2 === 0);
console.log(pairIdUsers);





/*- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/

let sortUsers = arrayUsers.sort((a,b) => b['id'] - a['id']);
console.log(sortUsers);



/*
- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client
*/


class Client{
    constructor(id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let arrayClients = [new Client(0, 'Sergey', 'Tsvetkov', 'qwrk2288915@gmail.com', '0999834750', ['масляний фільтр', 'повітряний фільтр']),
                    new Client(1, 'Robert', 'DeNiro', 'DeNiro@gmail.com', '0999564750', ['масляний фільтр', 'мастило']),
                    new Client(2, 'Jack', 'Nicholson', 'Nicholson@gmail.com', '0993834750', ['масляний фільтр', 'повітряний фільтр', 'мастило', 'колесо', 'кермо']),
                    new Client(3, 'Marlon', 'Brando', 'Brando@gmail.com', '0779834750', ['масляний фільтр', 'повітряний фільтр', 'мастило', 'педаль газу', 'фара задня', 'колесо', 'кермо']),
                    new Client(4, 'Denzel', 'Washington', 'Washington@gmail.com', '09899834750', ['масляний фільтр']),
                    new Client(5, 'Tom', 'Hanks', 'Hanks@gmail.com', '0234534750', ['масляний фільтр', 'повітряний фільтр', 'мастило', 'педаль газу', 'фара задня']),
                    new Client(6, 'Elizabeth', 'Taylor', 'Taylor@gmail.com', '0876834750', ['масляний фільтр', 'повітряний фільтр', 'мастило','повітряний фільтр', 'мастило', 'педаль газу', 'фара задня']),
                    new Client(7, 'Leonardo', 'DiCaprio', 'DiCaprio@gmail.com', '0456834750', ['масляний фільтр', 'повітряний фільтр', 'мастило']),
                    new Client(8, 'Morgan', 'Freeman', 'Freeman@gmail.com', '0659834750', ['масляний фільтр', 'повітряний фільтр', 'мастило']),
                    new Client(9, 'Johnny', 'Depp', 'Depp@gmail.com', '0345834750', ['масляний фільтр', 'повітряний фільтр', 'мастило', 'мастило', 'педаль газу', 'фара задня'])];

/*function createClients(array, quantity){
    for(i = 0; i < quantity; i++){
        array.push(new Client(i, 'Sergey', 'Tsvetkov', 'stark2288915@gmail.com', '0999834750', ['масляний фільтр', 'повітряний фільтр', 'мастило']));
    }
}*/

/*createClients(arrayClients, 10);*/
console.log(arrayClients);




/*- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

let sortClients = arrayClients.sort((a,b) => a['order'].length - b['order'].length);
console.log(sortClients);



//- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

function Car(model, producer, year, maxspeed, engine){
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.engine = engine;

//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    this.drive = function (){
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`);
    }



//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
    this.info = function (){
        for (const argKey in this) {
            if(typeof this[argKey] != 'function') {
                console.log(`${argKey} - ${this[argKey]}`)
            }
        }
    }

//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
    this.increaseMaxSpeed =function (newSpeed){
        return this.maxspeed+=newSpeed;
    }


//-- changeYear (newValue) - змінює рік випуску на значення newValue
    this.changeYear = function (newValue){
        return this.year = newValue;
    }



//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
    this.addDriver = function (driver){
        this.driver = driver;
    }

}

let mitsubishi = new Car('mitsubishi', 'japan', '2004', 180, '1,6');
mitsubishi.info();
console.log(mitsubishi.increaseMaxSpeed(23));
console.log(mitsubishi.changeYear(2007));
mitsubishi.addDriver('Sergey');
console.log(mitsubishi.driver);
mitsubishi.info();










/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:*/



class Car {
    constructor(model, producer, year, maxspeed, engine) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engine = engine;
    }

}


//-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

//-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

//-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

//-- changeYear (newValue) - змінює рік випуску на значення newValue

//-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car




