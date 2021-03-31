
        
        const slides = document.querySelectorAll('.offer__slide'),  // получаем елементы со страницы 
            prev = document.querySelector('.offer__slider-prev'),
            next = document.querySelector('.offer__slider-next'),
            total = document.querySelector('#total'),
            current = document.querySelector('#current')


        let slideIndex = 1; 

        showSlides(slideIndex) // показать первый слайд 


        // выводим общее количество слайдов 
        if (slides.length <10){
            total.textContent = `0${slides.length}`
        } else {
            total.textContent = slides.length
        }


        function showSlides(n){ // делаем функцию слайдера
        
            if (n > slides.length) {// если номер слайдера больше последнего слайдера 
                slideIndex = 1 //покажи слайд 1  
            }

            if (n < 1){
                slideIndex = slides.length// если меньне покажи последний слайд 
            }

            slides.forEach(item => item.style.display = 'none')// скрыть все слайды / так же возможно выводить через классы 

            slides[slideIndex - 1].style.display = 'block'// покажи заданный слайд 

            if (slides.length <10){
                current.textContent = `0${slideIndex}`
            } else {
                current.textContent = slideIndex
            }
        }

        function plusSlides(n){ // делаем функцию какой слайдер показать 
            showSlides(slideIndex += n)// вызываем показ слайдера + n 
        }

        prev.addEventListener('click', () => {// навешиваем события и нимусуем 1
            plusSlides(-1)
        })
        
        next.addEventListener('click', () => {// плюсуем 1 
            plusSlides(1)
        })



    <div class="offer__slider">
        <div class="offer__slider-counter">
        <div class="offer__slider-prev">
            <img src="icons/left.svg" alt="prev">
        </div>
        <span id="current"></span>
        /
        <span id="total"></span>
        <div class="offer__slider-next">
            <img src="icons/right.svg" alt="next">
        </div>
    </div>
    <div class="offer__slider-wrapper">

        <div class="offer__slide">
            <img src="img/slider/pepper.jpg" alt="pepper">
        </div>
        <div class="offer__slide">
            <img src="img/slider/food-12.jpg" alt="food">
        </div>
        <div class="offer__slide">
            <img src="img/slider/olive-oil.jpg" alt="oil">
        </div>
        <div class="offer__slide">
            <img src="img/slider/paprika.jpg" alt="paprika">
        </div>
    </div>
