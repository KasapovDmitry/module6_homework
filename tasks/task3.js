// Валидация числа
let flag = true;
function validation(numV) {
    let number = +numV;
    if (number !== 0) {
        if (typeof number === "number") {
            if (isNaN(number)) {
                flag = false;
                return flag;
            } else {
                flag = true;
                return flag;
            }
        } else {
            flag = false;
            return flag;
        }
    } else {
        flag = false;
        return flag;
    }
}
// Задание 3
// Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел.

let answer3 = document.querySelector('.answer3');
let input3 = document.querySelector('.input3');
let btn3 = document.querySelector('.btn3');
function summ3(a, b) {
    return a + b;
}
function numNew(num1) {
    return  num1;
}
function addNumber(num) {
    validation(num); // проверка на число смотри в вверху
    const num2 = numNew(num);
    if (flag === true) {
        return summ3(num, num2);
    } else {
        return '!!!Ввели не число!!!';
    }
}
btn3.onclick = () => {
    let result3 = +input3.value;
    const resultFunc = addNumber(result3);
    input3.value = '';
    answer3.innerHTML = resultFunc;
}