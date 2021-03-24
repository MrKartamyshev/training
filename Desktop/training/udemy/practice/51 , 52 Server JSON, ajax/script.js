'use strict'

const persone = {
    name: 'Alex',
    tel: '+744444444',
    parents: {
        mom: 'olla',
        dad: 'mike'
    }
}



const clone = (JSON.parse(JSON.stringify(persone))) // сначало преобразовуем в строку и парсим 



// ajax