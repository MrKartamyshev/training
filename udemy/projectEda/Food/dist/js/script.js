

window.addEventListener('DOMContentLoaded', ()=>{ // делаем загрузку после все остальное 
        
    
    // Tabs
        const   tabs = document.querySelectorAll('.tabheader__item'),// вкладки на которые мы будем тыкать 
                tabsContent = document.querySelectorAll('.tabcontent'),//весь контент который находиться в верстке 
                tabsParent = document.querySelector('.tabheader__items');//родитель который содержит все табы 

    
    
        function hideTabContent(){// функция которая скрывает все содержимое 
            tabsContent.forEach(item => {// перебираем элементы 
                item.classList.add('hide')
                item.classList.remove('show', 'fade')// скрываем все елементы 
            })

            tabs.forEach(item =>{
                item.classList.remove('tabheader__item_active')
            })
        }

        function showTabContent(i = 0) { //создаем функцию которая будет отображать опредиленный таб 
            tabsContent[i].classList.add('show', 'fade');// переводим дисплей нон в блок
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active'); // для заданного элемента добавляем класс 
        }

        hideTabContent();
        showTabContent();


        tabsParent.addEventListener('click', (event) => { //навешиваем событие на клик/ если кликнули то 
            const target = event.target;// сокращаем для удобной рабоыт(  цепляем событие на родителя )
            
            if (target && target.classList.contains('tabheader__item')) { // если событие произошло 
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }

            
        });
        console.dir(tabsParent)

    // Timer
    
        const deadline = '2021-05-20';

        function getTimeRemaining(endtime) {
            const t = Date.parse(endtime) - Date.parse(new Date()),
                days = Math.floor( (t/(1000*60*60*24)) ),
                seconds = Math.floor( (t/1000) % 60 ),
                minutes = Math.floor( (t/1000/60) % 60 ),
                hours = Math.floor( (t/(1000*60*60) % 24) );

            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function getZero(num){
            if (num >= 0 && num < 10) { 
                return '0' + num;
            } else {
                return num;
            }
        }

        function setClock(selector, endtime) {

            const timer = document.querySelector(selector),
                days = timer.querySelector("#days"),
                hours = timer.querySelector('#hours'),
                minutes = timer.querySelector('#minutes'),
                seconds = timer.querySelector('#seconds'),
                timeInterval = setInterval(updateClock, 1000);

            updateClock();

            function updateClock() {
                const t = getTimeRemaining(endtime);

                days.innerHTML = getZero(t.days);
                hours.innerHTML = getZero(t.hours);
                minutes.innerHTML = getZero(t.minutes);
                seconds.innerHTML = getZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                }
            }
        }

        setClock('.timer', deadline);


    //Modal

     const modalTrigger = document.querySelectorAll('[data-modal]'),
           modal = document.querySelector('.modal')
           
           
           openModal = () => {
                modal.classList.add('show'),
                modal.classList.remove('hide'),
                document.body.style.overflow = 'hidden';
                //clearInterval(modalTimerId); // если уже открыл то таймер не сработает 
            }// выключаем что бы не прокручивалось 
        // так же можно сделать через toggle
        // modal.classList.toggle('show') добавляем и удаляем 
           closeModal = () => {
                modal.classList.add('hide'),
                modal.classList.remove('show'),
                document.body.style.overflow = ''};// возварщаем по дефолту 

        
        


        
        // навешиваем события на каждый элемент в массиве 
        modalTrigger.forEach((item) => {
            item.addEventListener('click', () =>{
            openModal()
        })
        });


        modal.addEventListener('click', (e) =>{
            if (e.target === modal || e.target.getAttribute('data-close') == ""){ 
            closeModal()
            }
        })

        document.addEventListener('keydown',(e) =>{// ескейт 
            if (e.code === "Escape" && modal.classList.contains('show')) {
                closeModal()
            }
        })


       const modalTimerId = setTimeout(openModal, 50000);
        
       
       //при скролле вниз выводим модальное окно 

       function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);// удаляем обработчик событий 
        }
        }
        window.addEventListener('scroll', showModalByScroll);

        

    // Используем классы для карточек 

        class MenuCard {
            constructor(src, alt, title, descr, price, parentSelector, ...classes) {
                this.src = src;
                this.alt = alt;
                this.title = title;
                this.descr = descr;
                this.price = price;
                this.classes = classes;
                this.parent = document.querySelector(parentSelector);
                this.transfer = 27;
                this.changeToUAH(); 
            }

            changeToUAH() {
                this.price = this.price * this.transfer; 
            }

            render() {
                const element = document.createElement('div');

                if (this.classes.length === 0) {
                    this.classes = "menu__item";
                    element.classList.add(this.classes);
                } else {
                    this.classes.forEach(className => element.classList.add(className));
                }

                element.innerHTML = `
                    <img src=${this.src} alt=${this.alt}>
                    <h3 class="menu__item-subtitle">${this.title}</h3>
                    <div class="menu__item-descr">${this.descr}</div>
                    <div class="menu__item-divider"></div>
                    <div class="menu__item-price">
                        <div class="menu__item-cost">Цена:</div>
                        <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                    </div>
                `;
                this.parent.append(element);
            }
        }

        new MenuCard(
            "img/tabs/vegy.jpg",
            "vegy",
            'Меню "Фитнес"',
            'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
            9,
            ".menu .container"
        ).render();

        new MenuCard(
            "img/tabs/post.jpg",
            "post",
            'Меню "Постное"',
            'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
            14,
            ".menu .container"
        ).render();

        new MenuCard(
            "img/tabs/elite.jpg",
            "elite",
            'Меню “Премиум”',
            'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
            21,
            ".menu .container"
        ).render();



       
    //собираем данные и отправляем на сервер 


        const forms = document.querySelectorAll('form'); // получим все формы 
        const massag = {
            loading: 'img/spinner.svg',
            success: ' Спасибо! Мы скоро свяжемся',
            failure: 'Что то пошло не так'
        }

        forms.forEach(item => {// подвязываем все формы и подвязываем функцию 
            postData(item)
        })


        function postData(form){
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

                const request = new XMLHttpRequest()// создаем запрос 
                request.open('POST', 'server.php'); // указываем метод и путь 


                // заголовки для сервера , что именно приходит 
                request.setRequestHeader('Content-type', 'application/json');
                const formData = new FormData(form) //  конструктор для нового запроса 

                const object = {}
                formData.forEach(function(value, key) {
                    object[key] = value
                })

                const json = JSON.stringify(object)

                request.send(json)// посылаем запрос 
                


                request.addEventListener('load', () => {
                    if( request.status === 200 ){
                        console.log(request.response);// если запрос выполнен и данные улетели 
                        showThanksModal(massag.success)
                        form.reset() //  сбрасывем формы 
                        setTimeout( () =>{  // удаляем наш див 
                            statusMessage.remove()
                        }, 2000)
                    } else {
                        showThanksModal(massag.failure)
                    }
                })

            })
        }
        
        //Благодарность в модальном окне 
        
        function showThanksModal(message) {
            const prevModalDialog = document.querySelector('.modal__dialog')// получили селектор для работы 
          
            prevModalDialog.classList.add('hide')// добавили класс скрыть 
            openModal()

            // создаем окно благодарности 
            const thanksModal = document.createElement('div')
            thanksModal.classList.add('modal__dialog')
            thanksModal.innerHTML = `
                <div class="modal__content">
                    <div class="modal__close" data-close>×</div>
                    <div class="modal__title">${message}</div>
                </div>
            `

            document.querySelector('.modal').append(thanksModal) //добавляем наше окно благодарности 
            setTimeout(() =>{
                thanksModal.remove()//обязательно удаляем 
                prevModalDialog.classList.add('show')
                prevModalDialog.classList.remove('hide')
                closeModal()
            }, 4000)
        }
         



});
