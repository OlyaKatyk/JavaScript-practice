//Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let mas1;

mas1 = [123,'qwe',456,'asd',false,789,'zxc',false,true,75,];
console.log(mas1)
console.log(mas1[0])
console.log(mas1[1])
console.log(mas1[2])
console.log(mas1[3])
console.log(mas1[4])
console.log(mas1[5])
console.log(mas1[6])
console.log(mas1[7])
console.log(mas1[8])
console.log(mas1[9])


//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 ={
    title:'Harry Potter1',
    pageCount:453,
    genre:'fantasy'
}
let book2 ={
    title:'Harry Potter2',
    pageCount:356,
    genre:'fantasy'
}
let book3 ={
    title:'Harry Potter3',
    pageCount:521,
    genre:'fantasy'
    }

//Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Harry Potter1',
    pageCount: 453,
    genre: 'fantasy',
    authors:[
        {name: 'J.K.Rowling'},
        {age:58}]
}
let book5 ={
    title:'IT',
    pageCount:756,
    genre:'horror',
    authors:[
        {name:'Stephen King'},
        {age:76}
    ]
}
let book6 ={
    title:'Death on the Nile',
    pageCount:521,
    genre:'detective',
    authors:[
        {name:'Agatha Christie'},
        {age:86}
    ]
}

//Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users=[
    user1={
        name:'Vasyl',
        username:'vasyl27',
        password:'vas123'
    },
    user2={
        name:'Andriy',
        username:'andriy1994',
        password:125487245
    },
    user3={
        name: 'Vitaliy',
        username: 'vital25',
        password: 'qwerty123'
    },
    user4= {
        name: 'Olena',
        username: 'olenka27',
        password: 'asd1123'
    },
    user5={
        name:'Oleh',
        username:'oleh1207',
        password:1111222
    },
    user6={
        name:'Kateryna',
        username:'kate25',
        password:274431
    },
    user7= {
        name: 'Alina',
        username: 'ali1994',
        password: 'tym123123'
    },
    user8={
        name:'Anton',
        username:'anton789',
        password:225588
    },
    user9= {
        name: 'Ihor',
        username: 'ihor12061993',
        password: 'ihor12061993'
    },
    user10= {
        name: 'Ivan',
        username: 'ivanko23',
        password: '24j121w1'
    }
]
console.log(user1.password)
console.log(user2.password)
console.log(user3.password)
console.log(user4.password)
console.log(user5.password)
console.log(user6.password)
console.log(user7.password)
console.log(user8.password)
console.log(user9.password)
console.log(user10.password)

//- описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.

const temp=[

    day1={
    morning:15,
    day:25,
    night:10
    },
    day2={
        morning:11,
        day:22,
        night:8
    },
    day3={
        morning:8,
        day:18,
        night:6
    },
    day4={
        morning:12,
        day:22,
        night:9
    },
    day5={
        morning:14,
        day:26,
        night:12
    },
    day6={
        morning:13,
        day:25,
        night:11
    },
    day7={
        morning:8,
        day:19,
        night:6
    }
]

//Логічні розгалуження:
// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x=3;

if (x>0 || x<0){
    console.log('ВІРНО');
} else {
    console.log('НЕВІРНО')
}
//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time=58;

if (time<=15){
    console.log('Перша четверть');
}
else if (time>15 && time<=30){
    console.log('Друга четверть');
}
else if (time>30 && time<=45){
    console.log('Третя четверть');
}
else if (time>45 && time<=59){
    console.log('Четверта четверть');
}
else{
    console.log('НЕВІРНО')
}

//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day=23;

if (day<=10){
    console.log('Перша декада');
}
else if (day>10 && day<=19){
    console.log('Друга декада');
}
 else if (day>=20 &&day<=31){
     console.log('Третя декада');
}
else {
    console.log('НЕВІРНО')
}


//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let weekday= prompt('Enter day','Monday');

switch (weekday){
    case '1':
        console.log('Monday');
        break;
    case '2':
        console.log('Tuesday');
        break;
    case '3':
        console.log('Wednesday');
        break;
    case '4':
        console.log('Thursday');
        break;
    case '5':
        console.log('Friday');
        break;
    case '6':
        console.log('Saturday');
        break;
    case '7':
        console.log('Sunday');
        break;
    default:
        console.log('Wrong day!')
}


//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let z=25;
let y=27

if (z>y){
    console.log(x)
}
else if (y>z){
    console.log(y)
}
else{
    console.log('Equal')
}


//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let x1=127  ? 'Ok' : 'default'
console.log(x1)


//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration>5){console.log('Супер')}
if (coursesAndDurationArray[1].monthDuration>5){console.log('Супер')}
if (coursesAndDurationArray[2].monthDuration>5){console.log('Супер')}
if (coursesAndDurationArray[3].monthDuration>5){console.log('Супер')}
if (coursesAndDurationArray[4].monthDuration>5){console.log('Супер')}
if (coursesAndDurationArray[5].monthDuration>5){console.log('Супер')}