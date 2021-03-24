function addWords(obj, wrds) {   //добавляет слова в массив
    let arrayToAdd = obj.words.split(/\W+/) // обявляем переменную для сплита массива  
    let isToAdd = wrds.split(/\W+/) // создали переменную которая сплитует новую строку для добавления новых слов
    let added = arrayToAdd.concat(isToAdd) // возвращаем новый массив который соединен с другим массивом 
    let addedSorted = [...new Set(added)] // 
    return (obj.words = addedSorted.join(" ").toString()) // .join обединяет все элементы массива, Метод toString() возвращает строку, представляющую объект.
  }
  
  function removeWords(obj, wrds) {  // удалить указанные слова из свойства объекта
    let arrayToRemove = obj.words.split(/\W+/) // обявляем переменную для сплита массива 
    let arrayToRemoveSorted = [...new Set(arrayToRemove)]
    let isToRemove = wrds.split(/\W+/)
    let removed = arrayToRemoveSorted.filter(function (x) {  // 
      return isToRemove.indexOf(x) < 0
    });
    return (obj.words = removed.join(" ").toString())
  }
  function changeWords(obj, oldWrds, newWrds) { // поменять слова из указанного обекта 
    let arrayToRemove = obj.words.split(/\W+/)
    let arrayToRemoveSorted = [...new Set(arrayToRemove)]
    let isToRemove = oldWrds.split(/\W+/)
    let removed = arrayToRemoveSorted.filter(function (x) {
      return isToRemove.indexOf(x) < 0
    });
    let anotherToAdd = newWrds.split(/\W+/)
    return (obj.words = removed
      .join(" ")
      .concat(anotherToAdd.join(" "))
      .toString())
  }
  
// const obj = { // для проверки разкоментить и все работет 
//     words: 'newspapers newspapers  books magazines'
//     };

// console.log(obj); // {words: "newspapers newspapers  books magazines"}

// addWords(obj, 'radio newspapers');
// console.log(obj); // {words: "newspapers books magazines radio"}

// removeWords(obj, 'newspapers   radio');
// console.log(obj); // {words: "books magazines"}

// changeWords(obj, 'books radio  magazines', 'tv internet');
// console.log(obj); // {words: "tv internet"}