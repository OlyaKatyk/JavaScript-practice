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