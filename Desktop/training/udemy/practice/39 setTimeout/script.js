

const btn = document.querySelector('.btn') // получили елемент кнопки 
let timerId,
    i = 0;

// btn.addEventListener('click', () =>{ // навешали событие клик 
//     // const timerId = setTimeout(logger, 2000)
//     timerId = setInterval(logger, 1000) // создали переменную и присвоили есй сетинтервал что сделать и через сколько повторять действие
// })

// function logger(){
//     if (i === 3){
//         clearInterval(timerId)// останавливаем интервал 
//     }
//     console.log('text')
//     i++;
// }

// let id = setTimeout(function log(){ // код ждет время и после запускает функцию 
//     console.log('Hello');
//     id = setTimeout(log,500);
// }, 500)


//Делае анимацию 

function myAnimation( ) {
    const elem = document.querySelector('.box')// получили доступ к квадратику
    let pos = 0 // обявили переменную для позиции

    const id = setInterval(frame, 20)// задали ид сет интервал  и с течение времени меняем свойства класса 
    
    function frame(){ 
        if (pos == 300) {
            clearInterval(id); //останавливаем процес
        } else {
            pos++
            elem.style.top = pos + 'px';
            elem.style.left = pos + "px";
        }

    }
}

btn.addEventListener('click',myAnimation)// навешиваем события после клика выполнить функцию 