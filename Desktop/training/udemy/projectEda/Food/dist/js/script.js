

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
           modal = document.querySelector('.modal'),
           modalCloseBtn = document.querySelector('[data-close]'),
           
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

        modalCloseBtn.addEventListener('click', () =>{
            closeModal()
        })

        modal.addEventListener('click', (e) =>{
            if (e.target === modal){
            closeModal()
            }
        })

        document.addEventListener('keydown',(e) =>{// ескейт 
            if (e.code === "Escape" && modal.classList.contains('show')) {
                closeModal()
            }
        })


       //const modalTimerId = setTimeout(openModal, 5000);

       function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);// удаляем обработчик событий 
        }
        }
        window.addEventListener('scroll', showModalByScroll);

        

    // Используем классы для карточек 
csdv
    

});