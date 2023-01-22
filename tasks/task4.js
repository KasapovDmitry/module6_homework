// Задание 4
// Напишите функцию, которая принимает два числа. Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым.

let answer4 = document.querySelector('.answer4');
let input41 = document.querySelector('.input4-1');
let input42 = document.querySelector('.input4-2');
let btn4 = document.querySelector('.btn4');

function addNumber4(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
        answer4.innerHTML = '!!!Не ввели число!!!';
    } else {
        if (num2 > num1) {
            answer4.innerHTML = '';
            const intervalNumber1 = setInterval(function () {
                                
                    answer4.innerHTML = answer4.innerHTML + `<li> ${num1++} </li>`;

                if (num1 === num2 + 1) {
                    clearInterval(intervalNumber1);
                } 
            }, 1000);
        } else {
            answer4.innerHTML = '';
            const intervalNumber2 = setInterval(function () {
                                
                    answer4.innerHTML = answer4.innerHTML + `<li> ${num1--} </li>`;

                if (num1 === num2 - 1) {
                    clearInterval(intervalNumber2);
                } 
            }, 1000);
        }
    }
}

btn4.onclick = () => {
    let result41 = +input41.value;
    let result42 = +input42.value;
    addNumber4(result41, result42);
    input41.value = '';
    input42.value = '';
}