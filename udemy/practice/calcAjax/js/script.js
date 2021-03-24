'use strict'


// первым делом получем данные со страницы 
const   inputUah = document.querySelector('#uah'),
        inputUsd = document.querySelector('#usd');


//  ставим обработчик события после ввода выполняем 

inputUah.addEventListener('input', () => { 
    const request = new XMLHttpRequest()// – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.


    request.open('GET', 'js/current.json');// указываем метод и откуда берем информацию 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')//у нас есть тип контента и указываем какой тип и кодировку 
    request.send()// отправляем запрос (отправляем даныне )


    request.addEventListener('load', () => {// вешаем событие если происходят изменения то 
        if(request.status === 200){ // если сервер сработал и дал ответ 
            console.log(request.response);//вывиди содержимое на сервере
            const data = JSON.parse(request.response)// создали переменную и занесли туда данные трансформировали в обьект
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2) // сделали нужную операци и вывели 
        } else {
            inputUsd.value = 'Что то пошло не так'
        }
    })


    
    //status статус запроса 
    //statusText текстовое описание ответа от сервера 
    //respons  ответ от сервера 
    //readyState  

    // события 
    
})


inputUsd.addEventListener('input', () => { 
    const request = new XMLHttpRequest()// – это встроенный в браузер объект, который даёт возможность делать HTTP-запросы к серверу без перезагрузки страницы.


    request.open('GET', 'js/current.json');// указываем метод и откуда берем информацию 
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8')//у нас есть тип контента и указываем какой тип и кодировку 
    request.send()// отправляем запрос (отправляем даныне )


    request.addEventListener('load', () => {// вешаем событие если происходят изменения то 
        if(request.status === 200){ // если сервер сработал и дал ответ 
            console.log(request.response);//вывиди содержимое на сервере
            const data = JSON.parse(request.response)// создали переменную и занесли туда данные трансформировали в обьект
            inputUah.value = (+inputUsd.value * data.current.usd).toFixed(2) // сделали нужную операци и вывели 
        } else {
            inputUah.value = 'Что то пошло не так'
        }
    })

    inputUah.value = (+inputUsd.value * data.current.usd).toFixed(2)

    //status статус запроса 
    //statusText текстовое описание ответа от сервера 
    //respons  ответ от сервера 
    //readyState  

    // события 
    
})