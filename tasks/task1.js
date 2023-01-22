// Задание 1
// Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
// Оформите решение в виде функции
let answer1 = document.querySelector('.answer1');
let input1 = document.querySelector('.input1');
let btn1 = document.querySelector('.btn1');
let btn11 = document.querySelector('.btn1-1');
let arrayFromInput = [];

// Собираем массив
btn1.onclick = () => {
    arrayFromInput.push(input1.value);
    input1.value = '';
}
//Выводим решение
function checkingData() {
    let num = 0;
    let chet = 0;
    let nechet = 0;
    let nich = 0;
    let minus = 0;
    for (let i = 0; i < arrayFromInput.length; i++) {
        if (arrayFromInput[i].length !== 0) {
            if(!isNaN(Number(arrayFromInput[i]))) {
                if (Number(arrayFromInput[i]) > 0) {
                    num = Number(arrayFromInput[i]) % 2;
                    if (num == 1) {
                        nechet++;
                    } else {
                        chet++;
                    }
                } else if (Number(arrayFromInput[i]) === 0) {
                    nich++;
                } else {
                    minus++;
                }
            } 
        } else {
            nich++;
        }
    }
    answer1.innerHTML = `В массиве: четных значений - ${chet}, нечетных - ${nechet}, нулевых -  ${nich}, отрицательных - ${minus}`;
}
btn11.onclick = checkingData;