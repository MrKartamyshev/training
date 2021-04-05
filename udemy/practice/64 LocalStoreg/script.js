'use strict'

// localStorage.setItem('number', 5) // записать в локакл сторедж 

// console.log(localStorage.getItem('number'));// получение данных 

// localStorage.clear()

// console.log(localStorage.getItem('number'))


    const checkbox = document.querySelector('#checkbox'),
          form = document.querySelector('form'),
          change = document.querySelector('#color')

    if (localStorage.getItem('isChecked')){// если свойства нет то значение не пройдет 
        checkbox.cheked = true
    }


    if (localStorage.getItem('bg') === 'changed' ){
        localStorage.removeItem('bg')
        form.style.backgroundColor = 'red'
    }

    checkbox.addEventListener('click', () => {
        localStorage.setItem('isChecked', true)
    })

    change.addEventListener('click', () => {
        if (localStorage.getItem('bg') === 'changed' ){
            localStorage.removeItem('bg')
            form.style.backgroundColor = '#fff'
        } else {
            localStorage.setItem('bg','change')
            form.style.backgroundColor = 'red'
        }
    })


const persone = {
    name: 'Alex',
    age: 25
}

const serializedPersone = JSON.stringify(persone)
localStorage.setItem('alex', serializedPersone)
console.log(JSON.parse(localStorage.getItem('alex')));
