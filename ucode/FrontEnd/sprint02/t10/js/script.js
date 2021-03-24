function getInput() {
    let hero = {},
    regexpName = /^[a-zA-Z_]{1,20}$/, // ставим ограничения  с начала строки  для нашего ввода на одно слово плюс пробел  и до 20 символов
    regexpGender = /male|female$/i, // ставим правила выбора для гендер  или или
    regexpAge = /[1-9]{1,5}$/; // делаем ограничения для ввода от 1 до 5

    hero.name = prompt("What animal is the superhero most similar to?"); // делаем первый запрос данных 
    if (!hero.name || !regexpName.exec(hero.name)) // если условия соблюдены ( возможно использовать test)
    { 
        alert("Error message, try again."); // если условия не соблюдены выводим
        return;
    }

    hero.gender = prompt("Is the superhero male or female? Leave blank if unknown or other.");
    if (!hero.gender || !regexpGender.exec(hero.gender)) 
    {
        alert("Error message, try again.");
        return;
    }

    hero.age = prompt("How old is the superhero?");
    if (!hero.age || !regexpAge.exec(hero.age)) 
    {
        alert("Error message, try again.");
        return;
    }
    alert("The superhero name is: ".concat(hero.name, "-", getDescription(hero), "!"));

}

function getDescription(hero) { // делаем структуру для вывода значений согласно введенных данных 
    if (hero.age < 18) {
        if (hero.gender === 'male') {
            return 'boy';
        } else if (hero.gender === 'female') {
            return 'girl';
        } else {
            return 'kid';
        }
    } else {
        if (hero.gender === 'male') {
            return 'man';
        } else if (hero.gender === 'female') {
            return 'woman';
        } else {
            return 'hero';
        }
    }
}

getInput();
