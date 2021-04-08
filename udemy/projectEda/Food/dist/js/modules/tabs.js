function tabs(){
    const       tabs = document.querySelectorAll('.tabheader__item'),// вкладки на которые мы будем тыкать 
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
}


module.exports = tabs