input = prompt("wtite how many lines do you want to see ");
let x ="*";
let i = 1;
let res ='';

while (i <= input){// пока переменная меньше вводного числа исполнять 
    res += x.repeat(i) + '\n';
    i++;
}

alert(res);