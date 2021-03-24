
// для старта создаем переменную в которую запишем все элементы которые внути 
let char = document.getElementById('characters').children 

// создаем цикл который будет переберать каждый дочерний елемент и добавлять к нему нужные значения 

for (let i = 0; i < char.length; i++){  // выполняем цикл пока i не будет меньше количества элементов в структуре
    // создаем переменную для работы с классами 
    let getClass = char[i].getAttribute('class') 
    // создаем переменную для работы с дата атрибутами 
    let getDataElement = char[i].getAttribute('data-element')

    // теперь проверяем класс на условия и записываем результат 
    if (!getClass || (getClass != 'evil' && getClass != 'good')) { // !getClaas если класса нет 
        char[i].className = 'unknown'
        
    }
    //  Тоже самое делаем с дада елементами проверяем и присваиваем значение
    if (!getDataElement){ // если дата елемент отсуцтвует 
        char[i].setAttribute('data-element', 'none')// создаем дата елементы если их нет 
        //console.log(char[i]) так проверяю создались или нет 
    }
    
    getDataElement = char[i].getAttribute('data-element').split(' ') // достаем содержимое дата елементов и делим после пробела
    //console.log(getDataElement) 

    // добавляем в кажды дочерний елемент br для переноса строки 
    char[i].appendChild(document.createElement('br')) 

    // создаем цикл для создания кружочков с цветами и перечеркнутых 
    for (let x = 0; x < getDataElement.length; x++){// выполняем пока не пройдемся по всем
        let div = document.createElement('div') // создаем дивы в каждом елементе
        
        div.className = `elem ${getDataElement[x]}` //создаем класс елемент и подставляем атрибуты которые взяли выше
        
        //добавляем черточку для елементов у которых дата елемент ноне
        if (getDataElement[x] == 'none') { // если дата елементы ноне то 
            let line = document.createElement('div')
            line.className = 'line'
            div.appendChild(line)// добавляем в конец елемента наш див 
        }
        char[i].appendChild(div)// добавляем в конец елемента нащ див
    }
}
