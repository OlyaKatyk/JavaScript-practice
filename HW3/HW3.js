//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

users=['Oleh','Artem','Ivan','Andriy','Olya','Ihor','Olena','Yuriy','Alina','Yana']

for (let i = 0; i < users.length; i++) {
    document.write(`<div>${users[i]}</div>`)
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

users2=['Oleh','Artem','Ivan','Andriy','Olya','Ihor','Olena','Yuriy','Alina','Yana']

for (let i = 0; i < users2.length; i++) {
    document.write(`<div>${i+1} ${users2[i]}</div>`)
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

animals=['lion','cat','dog','elephant','fish','puma','monkey','zebra','koala','tiger','lion','cat','dog','elephant','fish','puma','monkey','zebra','koala','tiger']

let i = 0
while (i < animals.length) {
    document.write(`<h1>${animals[i]}</h1>`)
    i++
}

//За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині

animals=['lion','cat','dog','elephant','fish','puma','monkey','zebra','koala','tiger','lion','cat','dog','elephant','fish','puma','monkey','zebra','koala','tiger']

let id = 0
while (id < animals.length) {
    document.write(`<h1>${id+1} ${animals[id]}</h1>`)
    id++
}

//- Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону. Масив:

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

document.write(`<ul>`)
for (const item of listOfItems) {
    document.write(`<li>${item}</li>`)
}
document.write(`</ul>`)

//*Використовуючи данні з масиву, за допомоги document.write та циклу побудувати структуру по шаблону

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
]
for (let j = 0; j < products.length; j++) {
    document.write(`<div class="product-card">
                        <h3>${products[j].title} ${'price -'} 
                            ${products[j].price}
                            ${'UAH'}
                        </h3>
                        <img src="${products[j].image}" alt="picture">
                    </div>`)

}

//Є масив
//  за допомоги циклу вивести:
//  - користувачів зі статусом true
//  - користувачів зі статусом false
//  - користувачів які старші за 30 років

let users3 = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
]

for (const user of users3) {
    if (user.status === true) {document.write(`<h1>${user.name} ${user.age} ${user.status}</h1>`)}
}
for (const user of users3) {
    if (user.status === false) {document.write(`<h2>${user.name} ${user.age} ${user.status}</h2>`)}
}
for (const user of users3) {
    if (user.age > 30) {document.write(`<h3>${user.name} ${user.age} ${user.status}</h3>`)}
}



