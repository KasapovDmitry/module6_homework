// Задание 5
// Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n.

let answer5 = document.querySelector('.answer5');
let input51 = document.querySelector('.input5-1');
let input52 = document.querySelector('.input5-2');
let btn5 = document.querySelector('.btn5');

function addNumber4(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        answer5.innerHTML = '!!!Не ввели число!!!';
    } else {
        answer5.innerHTML = `Число ${num1} в степени ${num2} = ${Math.pow(num1, num2)}`;
    }
}

btn5.onclick = () => {
    let result51 = +input51.value;
    let result52 = +input52.value;
    addNumber4(result51, result52);
    input51.value = '';
    input52.value = '';
}
