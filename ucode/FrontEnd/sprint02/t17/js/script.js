 function  ask(){

    regexpName = /^[a-zA-Z_]{1,20}$/, // ставим ограничения  с начала строки  для нашего ввода на одно слово плюс пробел  и до 20 символов

    heroName = prompt("Write  first name:") // делаем первый запрос данных 
    if (!heroName || !regexpName.exec(heroName)) // если условия не соблюдены   ( возможно использовать test)
    { 
        alert("Error message, try again.") // выводим ошибку
        return
    }
    
    heroLastname = prompt("Write last name:")// повторяем для фамилии 
    if (!heroLastname || !regexpName.exec(heroLastname)) 
    {
        alert("Error message, try again.")
        return
    }
    let newheroName = heroName[0].toUpperCase() + heroName.slice(1)// берем и перезаписываем строки с первого символа
    let newheroLastname = heroLastname[0].toUpperCase() + heroName.slice(1)// тоже самое для фамилии 
    alert('You Name: ' + newheroName  +' ' + newheroLastname) // выводим наши новые строки 
}

ask()