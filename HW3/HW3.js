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