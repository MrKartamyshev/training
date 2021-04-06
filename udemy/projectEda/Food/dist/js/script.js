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

        const getResource = async  (url) => {// настраивает наш запрос 
            const res =  await fetch(url)

            if (!res.ok){
                throw new Error(`Could not fetch ${url}, status: ${res.status}`)
            }

            return await res.json()// трансформирует ответ в json
        }

        getResource('http://localhost:3000/menu')
            .then(data => {
                data.forEach(({img, altimg, title, descr, price}) => {// деструктуризируем и передвем
                    new MenuCard(img, altimg, title, descr, price, '.menu .container').render()// рендерим что передали создает новые карточки 
                })
            })
        
                // второй вариант 
            //     getResource('http://localhost:3000/menu')
            //     .then(data => createCard(data));

            // function createCard(data) {
            //     data.forEach(({img, altimg, title, descr, price}) => {
            //         const element = document.createElement('div');

            //         element.classList.add("menu__item");

            //         element.innerHTML = `
            //             <img src=${img} alt=${altimg}>
            //             <h3 class="menu__item-subtitle">${title}</h3>
            //             <div class="menu__item-descr">${descr}</div>
            //             <div class="menu__item-divider"></div>
            //             <div class="menu__item-price">
            //                 <div class="menu__item-cost">Цена:</div>
            //                 <div class="menu__item-total"><span>${price}</span> грн/день</div>
            //             </div>
            //         `;
            //         document.querySelector(".menu .container").append(element);
            //     });
            // }


            //  Пример интеграции сторонней библиотеки 
            // axios.get('http://localhost:3000/menu')
            //         .then(data => {
            //             data.data.forEach(({img, altimg, title, descr, price}) => {// деструктуризируем и передвем
            //                 new MenuCard(img, altimg, title, descr, price, '.menu .container').render()// рендерим что передали создает новые карточки 
            //             })
            //         } )
            
            
    //собираем данные и отправляем на сервер 


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
        

        fetch('http://localhost:3000/menu')// отправляем запрос на db.json
            .then(data => data.json()) // обрабатывает ответ от сервера и превращзаем в обьект 


    
    
    
    //Slider #1       

        // const slides = document.querySelectorAll('.offer__slide'),  // получаем елементы со страницы 
        //     prev = document.querySelector('.offer__slider-prev'),
        //     next = document.querySelector('.offer__slider-next'),
        //     total = document.querySelector('#total'),
        //     current = document.querySelector('#current')


        // let slideIndex = 1; 

        // showSlides(slideIndex) // показать первый слайд 


        // // выводим общее количество слайдов 
        // if (slides.length <10){
        //     total.textContent = `0${slides.length}`
        // } else {
        //     total.textContent = slides.length
        // }


        // function showSlides(n){ // делаем функцию слайдера
        //     if (n > slides.length) {// если номер слайдера больше последнего слайдера 
        //         slideIndex = 1 //покажи слайд 1  
        //     }

        //     if (n < 1){
        //         slideIndex = slides.length// если меньне покажи последний слайд 
        //     }

        //     slides.forEach(item => item.style.display = 'none')// скрыть все слайды 

        //     slides[slideIndex - 1].style.display = 'block'// покажи заданный слайд 

        //     if (slides.length <10){
        //         current.textContent = `0${slideIndex}`
        //     } else {
        //         current.textContent = slideIndex
        //     }
        // }

        // function plusSlides(n){ // делаем функцию какой слайдер показать 
        //     showSlides(slideIndex += n)// вызываем показ слайдера + n 
        // }

        // prev.addEventListener('click', () => {// навешиваем события и нимусуем 1
        //     plusSlides(-1)
        // })
        
        // next.addEventListener('click', () => {// плюсуем 1 
        //     plusSlides(1)
        // })

    
    
    //Slide #2

        let offset = 0;
        let slideIndex = 1;

        const slides = document.querySelectorAll('.offer__slide'),
            slider = document.querySelector('.offer__slider'),
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            total = document.querySelector('#total'),
            current = document.querySelector('#current'),
            slidesWrapper = document.querySelector('.offer__slider-wrapper'),
            width = window.getComputedStyle(slidesWrapper).width,
            slidesField = document.querySelector('.offer__slider-inner');
            


        if (slides.length < 10) {
            total.textContent = `0${slides.length}`;
            current.textContent =  `0${slideIndex}`;
        } else {
            total.textContent = slides.length;
            current.textContent =  slideIndex;
        }
        
        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';

        slidesWrapper.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = width;
        });

        slider.style.position = 'relative'


        // создаем индекатор и добавляем на страничку
        const indicators = document.createElement('ol')
            dots =[]
        indicators.classList.add('carousel-indicators')
        indicators.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;    
        `;

        slider.append(indicators)

        for (let i = 0; i < slides.length; i++){
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1)// устанавливаем атрибут / каждой точке устанавливаем дата слайд и нумерацию 
            dot.style.cssText = `
                box-sizing: content-box;
                flex: 0 1 auto;
                width: 30px;
                height: 6px;
                margin-right: 3px;
                margin-left: 3px;
                cursor: pointer;
                background-color: #fff;
                background-clip: padding-box;
                border-top: 10px solid transparent;
                border-bottom: 10px solid transparent;
                opacity: .5;
                transition: opacity .6s ease;
            `
            if (i == 0){
                dot.style.opacity = 1
            }
            indicators.append(dot)
            dots.push(dot)
        }



        next.addEventListener('click', () => {
            if (offset == (+width.slice(0, width.length - 2) * (slides.length - 1))) {
                offset = 0;
            } else {
                offset += +width.slice(0, width.length - 2); 
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == slides.length) {
                slideIndex = 1;
            } else {
                slideIndex++;
            }

            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }

            dots.forEach(dot => dot.style.opacity = '.5')
            dots[slideIndex -1].style.opacity = 1
        });

        prev.addEventListener('click', () => {
            if (offset == 0) {
                offset = +width.slice(0, width.length - 2) * (slides.length - 1);
            } else {
                offset -= +width.slice(0, width.length - 2);
            }

            slidesField.style.transform = `translateX(-${offset}px)`;

            if (slideIndex == 1) {
                slideIndex = slides.length;
            } else {
                slideIndex--;
            }

            if (slides.length < 10) {
                current.textContent =  `0${slideIndex}`;
            } else {
                current.textContent =  slideIndex;
            }


            dots.forEach(dot => dot.style.opacity = '.5')
            dots[slideIndex -1].style.opacity = 1
        });
        

        dots.forEach(dot => {
            dot.addEventListener('click', (e) =>{
                const slideTo =e.target.getAttribute('data-slide-to')

                slideIndex = slideTo
                offset = +width.slice(0, width.length -2) * (slideTo -1)

                slidesField.style.transform = `translateX(-${offset}px)`

                if (slides.length < 10) {
                    current.textContent =  `0${slideIndex}`;
                } else {
                    current.textContent =  slideIndex;
                }

                dots.forEach(dot => dot.style.opacity = '.5')
                dots[slideIndex -1].style.opacity = 1
            })
        })



    //calc
        const result = document.querySelector('.calculating__result span');

        let sex,height, weight, age, ratio;


        // записывем в локалсторедж
        if (localStorage.getItem('sex')){
            sex = localStorage.getItem('sex')
        } else {
            sex = 'female'
            localStorage.getItem('sex', 'female')
        }
        
        if (localStorage.getItem('ratio')){
            ratio = localStorage.getItem('ratio')
        } else {
            ratio = 1.375
            localStorage.getItem('ratio', 1.375)
        }




        function calcTotal() {
            if (!sex || !height || !weight || !age || !ratio) {
                result.textContent = '____'; // Можете придумать что угодно
                return;
            }
            if (sex === 'female') {
                result.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
            } else {
                result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
            }
        }

        calcTotal();

        function initLocalSetting(selector, activeClass){
            const element = document.querySelectorAll(selector)

            element.forEach(elem => {
                elem.classList.remove(activeClass)
                if (elem.getAttribute('id') === localStorage.getItem('sex')){
                    elem.classList.add(activeClass)
                }
                if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')){
                    elem.classList.add(activeClass)
                }
            })
        }
       

        initLocalSetting('#gender div', 'calculating__choose-item_active')
        initLocalSetting('.calculating__choose_big div', 'calculating__choose-item_active')


        function getStaticInformation(selector, activeClass) {
            const elements = document.querySelectorAll(selector);

            elements.forEach(elem => {
                elem.addEventListener('click', (e) => {
                    if (e.target.getAttribute('data-ratio')) {
                        ratio = +e.target.getAttribute('data-ratio');
                        localStorage.setItem('ratio', e.target.getAttribute('data-ratio'))
                    } else {
                        sex = e.target.getAttribute('id');
                        localStorage.setItem('sex',e.target.getAttribute('id'))
                    }
        
                    elements.forEach(elem => {
                        elem.classList.remove(activeClass);
                    });
        
                    e.target.classList.add(activeClass);
        
                    calcTotal();
                });
            });
        }

        getStaticInformation('#gender div', 'calculating__choose-item_active');
        getStaticInformation('.calculating__choose_big div', 'calculating__choose-item_active');

        function getDynamicInformation(selector) {
            const input = document.querySelector(selector);

            input.addEventListener('input', () => {

                if (input.value.match(/\D/g)){// когда вводим не чесло будем подсвечивать импут 
                    input.style.border = '1px solid red'
                } else {
                    input.style.border = 'none'
                }

                switch(input.getAttribute('id')) {
                    case "height":
                        height = +input.value;
                        break;
                    case "weight":
                        weight = +input.value;
                        break;
                    case "age":
                        age = +input.value;
                        break;
                }

                calcTotal();
            });
        }

        getDynamicInformation('#height');
        getDynamicInformation('#weight');
        getDynamicInformation('#age');


});
