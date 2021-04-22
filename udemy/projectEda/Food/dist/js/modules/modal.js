
function modal(){
    const   modalTrigger = document.querySelectorAll('[data-modal]'),
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
 
}

module.exports = modal