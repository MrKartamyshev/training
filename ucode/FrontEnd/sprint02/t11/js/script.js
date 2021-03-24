
let i = 1;
let res ='';
input = prompt('Write number at 1 to 9');

while (i < 10){// пока переменная меньше 10 выполняеться функция ) 
    res += i  + "*" + input + " = " + i * input + '\n';
    i++;
}

alert(res);