"use struct";

// 1. Создать функцию, генерирующую шахматную доску. 
// При этом можно использовать любые html-теги по своему желанию. 
// Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
// Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.


// Генерация поля происходит по нажатию кнопки. Все проверено и работает.
// Постарался, чтобы все генерировалось по максимуму, чтобы ни одной ячейки не было сделано в ручную.

let button = document.getElementById('create_field');
button.addEventListener('click', chess_generate);

function chess_generate() {
    if (document.querySelector('.chess_table') === null) {

        const field = document.createElement('table');
        field.classList.add('chess_table');
        field.style.borderSpacing = 0;
        document.body.appendChild(field);

        // Генерация первой строки
        let letters = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        let HTMLinput_firstline_cells = '';
        let HTMLinput_firstline = '';
        for (const i in letters) {
            HTMLinput_firstline = `<tr>${HTMLinput_firstline_cells += `<th>${letters[i]}</th>`}</tr>`;
        }

        // Функция для генерации строки
        function generateLine(n) {
            HTMLoutput = '';

            for (let i = n; i <= (n + 7); i++) {
                HTMLoutput += `${(i % 2 != 0) ? `<th ${whitestyle}></th>` : `<th ${blackstyle}></th>`}`;
            }
            return `<th ${whitestyle}>${n}</th> ${HTMLoutput} <th ${whitestyle}>${n}</th>`;
        }

        // Генерация поля
        let HTMLinput = '';
        const whitestyle = 'style="width: 30px; height: 30px;"';
        const blackstyle = 'style="background-color: black; width: 30px; height: 30px;"';
        for (let i = 1; i <= 8; i++) {
            HTMLinput += `<tr>${generateLine(i)}</tr>`
        }
        field.innerHTML = HTMLinput_firstline + HTMLinput + HTMLinput_firstline;
    }
    chessmen();
}


// 2*. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,

// Придумал с помощью таких функций. Особо как оптимизировать не усложняя логику не придумал.
function chessmen() {
    let first_line1 = document.querySelector('tr:nth-child(2)').querySelectorAll('th');
    let first_line2 = document.querySelector('tr:nth-child(9)').querySelectorAll('th');
    let second_line1 = document.querySelector('tr:nth-child(3)').querySelectorAll('th');
    let second_line2 = document.querySelector('tr:nth-child(8)').querySelectorAll('th');

    function fill_second(line) {
        for (let i in line) {
            if (i != 0 && i != 9) {
                line[i].innerHTML = '<div style="color:red;">П</div>';
            }
        }
    }

    function fill_first(line) {
        const list_chess = ['', 'Л', 'К', 'О', 'Ф', 'К', 'О', 'К', 'Л', '']
        for (let i in line) {
            if (i != 0 && i != 9) {
                line[i].innerHTML = `<div style="color:red;">${list_chess[i]}</div>`;
            }
        }

    }

    fill_second(second_line1);
    fill_second(second_line2);
    fill_first(first_line1);
    fill_first(first_line2);
}

// 3. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
// 3.1. Пустая корзина должна выводить строку «Корзина пуста»;
// 3.2. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».

// По нажатию кнопки выводится и «В корзине: n товаров на сумму m рублей»
// Постарался на ООП написать
const cart_review = {

    user_id: 1,

    items: {
        banana: { quantity: 5, price: 2.50, desc: 'some description' },
        avocado: { quantity: 2, price: 3.50, desc: 'some description' },
        mango: { quantity: 15, price: 2.95, desc: 'some description' },
        strawberry: { quantity: 6, price: 1.80, desc: 'some description' },
        coconut: { quantity: 6, price: 1.56, desc: 'some description' },
    },

    calc_price() {
        let total_price = 0;
        for (const i in this.items) {
            total_price += this.items[i].price * this.items[i].quantity;
        } return total_price;
    },

    calc_lenth() {
        return Object.keys(this.items).length;
    },

    basket_generate() {
        if (document.querySelector('.basket_item') == null) {
            const basket = document.createElement('div');
            basket.classList.add('basket_item');
            document.body.appendChild(basket);

            HTMLoutput = '';
            if (!cart_review.calc_lenth()) {
                HTMLoutput = 'Корзина пуста';
            } else {
                HTMLoutput = `В корзине: ${cart_review.calc_lenth()} товаров на сумму ${cart_review.calc_price()} рублей`;
            }
            basket.innerHTML = HTMLoutput;
        }
    },
}

button.addEventListener('click', cart_review.basket_generate);

// 4*. Сделать так, чтобы товары в каталоге выводились при помощи JS:
// 4.1. Создать массив товаров (сущность Product);
// 4.2. При загрузке страницы на базе данного массива генерировать вывод из него. HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.

button.addEventListener('click', basket_show);

function basket_show() {
    if (document.querySelector('.basket_list') == null) {
        const basket = document.createElement('div');
        basket.classList.add('basket_list');
        document.body.appendChild(basket);

        HTMLoutput = '';

        for (const i in cart_review.items) {
            HTMLoutput += `<br>
            <p>Продукт: ${i}</p>
            <p>Цена: ${cart_review.items[i].price}</p>
            <p>Описание: ${cart_review.items[i].desc}</p>`
        }

        basket.innerHTML = HTMLoutput;
    }
}