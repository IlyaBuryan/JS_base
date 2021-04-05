"use strict";

// 1. ------------- С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

// Вариант 1 - с 1 while и функцией для определения простого числа.
let i = 2;
while (i <= 100) {
    if (isPrime(i) == undefined) {
        console.log(i);
    } i++;
}

function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
}

// Вариант 2 - с while вложенным в while
let i = 2;
while (i <= 100) {
    let j = 2;
    while (j < i) {
        if (i % j === 0) {
            break;
        } j++;
        if (i == j + 1) console.log(i);
    } i++;
}


// 2. ------------- С этого урока начинаем работать с функционалом интернет-магазина. 
// Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// Отдельно инициализирован массив и через push в конец заполнен 5 элементами. 
// В функции инициализирована переменная суммы и путем перебора массива к ней прибавлены все цены товаров.

let shop = new Array();

shop.push([1, "Banana", 2.50, 'some description']);
shop.push([2, "Avocado", 3.50, 'some description']);
shop.push([3, "Mango", 2.90, 'some description']);
shop.push([4, "Strawberry", 1.80, 'some description']);
shop.push([5, "Coconut", 1.55, 'some description']);

function countBasketPrice(arr) {
    let sum = 0;
    for (const i in arr) {
        sum += parseFloat(arr[i][2]);
    } return sum.toFixed(2);
}

console.log(countBasketPrice(shop));


// 3. ------------- *Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (let i = 0; i < 10; console.log(i++)) { };


// 4. ------------- *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 1; i <= 20; i++) {
    console.log("*".repeat(i));
}
