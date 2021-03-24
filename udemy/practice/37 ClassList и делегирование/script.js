'use strict'

const   btns = document.querySelectorAll('button'),// получение всех элементов 
        wrapper = document.querySelector('.btn-block');



// console.log(btns[0].classList.length) //содержит методы и количество классов и элементов в массиве
// console.log(btns[0].classList.item(1)); // получение название класса точнее опредиленной части класса 
//console.log(btns[1].classList.add('red','awdad')) // добавляет нужные классы , можно через зяпятую добавлять много классов 
//console.log(btns[0].classList.remove('blue')) // удаляет класс 
//console.log(btns[0].classList.toggle('blue')) // переключение удаление или добавление в зависимости от истории

// if (btns[1].classList.contains('red')){ // если кнопка содержит класс ред то введи нам его 
//     // проверили на наличие класса, получили правду , выполнили действия 
//     console.log('red')
// }

btns[0].addEventListener('click', () => { // если кликнуто на кнопку выполни следующее
    // if (!btns[1].classList.contains('red')){ // если второй элемент не !содержит класс ред то 
    //     btns[1].classList.add('red') // то добавь его 
    // } else {// если содержит 
    //     btns[1].classList.remove('red')// то удали 
    // }

    btns[1].classList.toggle('red')// Есл нет то добавляет , если есть - удаляет 
})

wrapper.addEventListener('click',(event)=>{ //обрабоччик событий через функцию / event содержит всю информацию об том элементе 
    // if (event.target && event.target.tagName == "BUTTON"){// классическое применение делегирования если произошло событие клика 
    //     console.log('HELLO')
    // }
    if (event.target && event.target.matches("button.red")){// указываем событие для конкретного класса
        console.log('HELLO')
    }
    // if (event.target && event.target.classList.contains('blue')){ //  делегируем с родителя на его потомки 
    //     console.log('hello')
    // }

    //console.dir(event.target)// посмотреть все свойства кликая на элемен 
    
})

// console.log(btns[0].className)// устаревший метот получение классов 

// не срабатывает делегирование 
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     })
// })

const btn = document.createElement('button')// создать елемент батон 
btn.classList.add('red') // добавить к элементу класс ред 
wrapper.append(btn)// добавить к родителю дочерний элемент 

