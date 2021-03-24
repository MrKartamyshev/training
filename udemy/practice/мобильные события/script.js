

// touchstart  
// touchmove
// touchend
// touchenter  ведем пальцем по экрапну и заходим на елемент 
// tochleave когда палец ушел с элемента 
// tochcancel вышел с браузера 


window.addEventListener('DOMContentLoaded', () => {// ставим событие что вся страничка загружена и элементы получены колбек функцыя
    const box = document.querySelector('.box')

    box.addEventListener('touchstart', (e) => { // ставим колбек функции после того как выполниться наше событие 
        e.preventDefault()// отменяем стандартное поведение браузера 

        console.log("start")
        console.log(e.touches)// обьект раскрывает информацию, количество пальцев и так далее 
        console.log(e.targetTouches)
    })

    box.addEventListener('touchmove', (e) => { // ставим колбек функции после того как выполниться наше событие 
        e.preventDefault()// отменяем стандартное поведение браузера 

        console.log(e.targetTouches[0].pageX)
    })

    box.addEventListener('touchend', (e) => { // ставим колбек функции после того как выполниться наше событие 
        e.preventDefault()// отменяем стандартное поведение браузера 

        console.log("end")
    })
})

// touches список пальцев на сенсорном мониторе 
// targetTouches
// changedTouches  список пальцев которые участвуют в текущем событии / пальци которые совершили определенное действие