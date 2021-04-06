"use strict";

// 1. Написать функцию, преобразующую число в объект.Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни.Например, для числа 245 мы должны получить следующий объект: { ‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2 }.Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function numberToobj(num) {
    if (!(num > 999) && !(num < 0) && !(isNaN(+num))) {
        let n_str = String(parseInt(num));
        const obj = {
            единицы: +n_str[n_str.length - 1],
            десятки: +n_str[n_str.length - 2] || 0,
            сотни: +n_str[n_str.length - 3] || 0,
        };
        return obj;
    } else {
        console.log('Вы ввели число не удовлетворяющее условию: число от 0 до 999');
        return {};
    }
}

// Все проверки ниже пройдены:

// let c = numberToobj('df');
// console.log(c);

let a = numberToobj(245);
console.log(a);
console.log(a.десятки);

// let b = numberToobj(2);
// console.log(b);

// let b2 = numberToobj(21.2);
// console.log(b2);



// 2.Продолжить работу с интернет - магазином:
// 2.1.В прошлом домашнем задании вы реализовали корзину на базе массивов.Какими объектами можно заменить их элементы ?
// 2.2.Реализуйте такие объекты.
// 2.3.Перенести функционал подсчета корзины на объектно - ориентированную базу.

const basket = {
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
    }
};

console.log(basket.calc_price());



// 3. * Подумать над глобальными сущностями.К примеру, сущность «Продукт» в интернет - магазине актуальна не только для корзины, но и для каталога.Стремиться нужно к тому, чтобы объект «Продукт» имел единую структуру для различных модулей сайта, но в разных местах давал возможность вызывать разные методы.

// Пока в задание не совсем вник. При разборе на уроке должно стать понятнее :)
// Ниже моя модель сущности "Продукт", которую использовал при написании моделей магазинчиков на других курсах GB.

// category = ForeignKey для категории
// name = CharField()
// description = TextField()
// image = ImageField()
// price = DecimalField()
// number = PositiveIntegerField()
// date_add = DateField()
// date_update = DateField()