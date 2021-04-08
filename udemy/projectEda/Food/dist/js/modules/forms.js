function forms(){
    const forms = document.querySelectorAll('form'); // получим все формы 
    const massag = {
        loading: 'img/spinner.svg',
        success: ' Спасибо! Мы скоро свяжемся',
        failure: 'Что то пошло не так'
    }

    forms.forEach(item => {// подвязываем все формы и подвязываем функцию 
        bindPostData(item)
    })

    const postData = async  (url, data) => {// настраивает наш запрос 
        let res =  await fetch(url, {// посылает на сервер  // await будет дожидатся окончания запроса 
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: data   // получает ответ от сервера 
        });

        return await res.json()// трансформирует ответ в json
    }// асинзронный код , мы не знаем когда прийдет ответ от сервера 



    function bindPostData(form){
        form.addEventListener('submit', (e) => { //навешиваем событие на клик 
            
            e.preventDefault();// отменяем стандартное поведение браузера 
            

            const statusMessage = document.createElement('img')// создаем див что бы поместить текст 
            statusMessage.classList.add('status')// добавляем класс
            statusMessage.src = massag.loading//содержимое
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
                `
    
            form.insertAdjacentElement('afterend', statusMessage)//добавляем в конец элементов 

            // заголовки для сервера , что именно приходит 
          
            const formData = new FormData(form) //  собераем все данные спомощю нашей формы 

            const json = JSON.stringify(Object.fromEntries(formData.entries()))


            //const obj = { a: 23, b: 50}
            //console.log(Object.entries(obj));// каждое свойство и формирует массив 
           // наоборот Object.fromEnties()
            
            // берем и отправляем наши данные 
            
            postData('http://localhost:3000/requests', json)
            .then(data => { //data -то что нам вернул сервер
                console.log(data);// если запрос выполнен и данные улетели 
                showThanksModal(massag.success)
                statusMessage.remove()// удаляем спинер 
            }).catch(() => {
                showThanksModal(massag.failure)// если что то пойдет не так 
            }).finally(() =>{
                form.reset()//  сбрасывем формы 
            })
        })
    }
}

module.exports = forms