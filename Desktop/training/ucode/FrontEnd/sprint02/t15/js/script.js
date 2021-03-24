function checkDivision(beginRange, endRange) {
    do {   // делаем следующие манипуляции с вводными параметрами 
        let str = beginRange;   // обявили стр == первому вводному числу
        flag = false;
        if ((beginRange % 2) === 0) { // если остаток деления равен нулю то число кратное 
            str += ' is even';  // добавляем что число кратное
            flag = true;
        }
        if ((beginRange % 3) === 0) {
            if (flag === true)
            str += ',';
            str += ' is a multiple of 3';
            flag = true;
        }
        if ((beginRange % 10) === 0) {
            if (flag === true)
            str += ',';
            str += ' is a multiple of 10';
            flag = true;
        }
        if (flag === false)
        str += ' -';
        flag = false;
        console.log(str + '\n');
        beginRange += 1;
    } while (beginRange <= endRange); // делаем до тех пор пока не переберем все числа от вводного
    }

    let num1 = +prompt('Enter begin range number: ', 1);
    num2 = +prompt('Enter end range number: ', 100);
    
    if (Number.isInteger(num1) && Number.isInteger(num2)) { // проверяем на целое число и возвращает тру
        if (num1 <= num2)  // проверяем не больше ли перное чило второго 
        checkDivision(num1, num2); // если все ок , выполняем если нет тогда меняем
        else
        checkDivision(num2, num1);
        
    } else {
        alert('Wrong input. Try again!');
    }
