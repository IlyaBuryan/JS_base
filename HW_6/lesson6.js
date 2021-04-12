// 1. Доработать модуль корзины.
// a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без перезагрузки страницы
// b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего вида

// 2 *У товара может быть несколько изображений. Нужно:
// a. Реализовать функционал показа полноразмерных картинок товара в модальном окне
// b. Реализовать функционал перехода между картинками внутри модального окна ("листалка")


// Листалку не доделал только
const catalog = {

    items: {
        banana: { id: 1, quantity: 1, price: 2.50, desc: 'some description' },
        avocado: { id: 2, quantity: 1, price: 3.50, desc: 'some description' },
        mango: { id: 3, quantity: 1, price: 2.95, desc: 'some description' },
        strawberry: { id: 4, quantity: 1, price: 1.80, desc: 'some description' },
        coconut: { id: 5, quantity: 1, price: 1.56, desc: 'some description' },
    },

    cat_show() {
        if (document.querySelector('.cat_list') == null) {
            const cat = document.createElement('div');
            cat.classList.add('cat_list');

            const place = document.querySelector('#catalog');
            place.appendChild(cat);

            HTMLoutput = '';

            for (const i in this.items) {
                HTMLoutput += `<br>
                <div class="catalog_item">
                    <img src="img_s/${i}.jpg" alt="">
                    <p>Продукт: ${i}</p>
                    <p>Цена: ${this.items[i].price}</p>
                    <p>Описание: ${this.items[i].desc}</p>
                    <input type="button" value="Купить" id="${i}">
                </div>`
            }

            cat.innerHTML = HTMLoutput;
        }
    },
}

catalog.cat_show();

const cart_review = {

    items: {},

    calc_price() {
        let total_price = 0;
        for (const i in this.items) {
            total_price += this.items[i].price * this.items[i].quantity;
        } return total_price.toFixed(2);
    },

    calc_lenth() {
        return Object.keys(this.items).length;
    },

    basket_generate() {
        const basket = document.createElement('div');
        basket.classList.add('basket_item');

        const place = document.querySelector('#basket');
        place.appendChild(basket);

        HTMLoutput = '';
        if (!this.calc_lenth()) {
            HTMLoutput = 'Корзина пуста';
        } else {
            HTMLoutput = `В корзине: ${this.calc_lenth()} товаров на сумму ${this.calc_price()} рублей`;
        }
        basket.innerHTML = HTMLoutput;
    },

    basket_show() {
        const basket = document.createElement('div');
        basket.classList.add('basket_list');

        const place = document.querySelector('#basket');
        place.appendChild(basket);

        HTMLoutput = '';

        for (const i in this.items) {
            HTMLoutput += `<br>
                <div class="catalog_item">
                    <img src="img_s/${i}.jpg" alt="pic">
                    <p>Продукт: ${i}</p>
                    <p>Цена: ${this.items[i].price}</p>
                    <p>Кол-во: ${this.items[i].quantity}</p>
                    <p>Описание: ${this.items[i].desc}</p>
                    <input type="button" value="Убрать" id="${i}">
                </div>`
        }

        basket.innerHTML = HTMLoutput;
    },

    init() {
        document.querySelector('#catalog')
            .addEventListener('click', event => {
                this.elemClickCatalog(event);
            });

        document.querySelector('#basket')
            .addEventListener('click', event => {
                this.elemClickBasket(event);
            });
    },

    elemClickCatalog(event) {
        if (event.target.type == 'button') {
            const selectItem = catalog.items[`${event.target.id}`];

            if (`${event.target.id}` in this.items) {
                this.items[`${event.target.id}`].quantity += 1;
            } else {
                this.items[`${event.target.id}`] = Object.assign({}, selectItem);
            }

            const a = document.querySelector('.basket_list');
            const b = document.querySelector('.basket_item');
            if (a) {
                document.querySelector('#basket').removeChild(a);
            };

            if (b) {
                document.querySelector('#basket').removeChild(b);
            };

            this.basket_generate();
            this.basket_show();
        }

        if (event.target.tagName == 'IMG') {
            this.zoomPict(event);
        }
    },

    elemClickBasket(event) {
        if (event.target.type == 'button') {

            const s = this.items[`${event.target.id}`];

            if (s.quantity > 1) {
                s.quantity -= 1;
            } else {
                delete this.items[`${event.target.id}`];
            }

            const a = document.querySelector('.basket_list');
            const b = document.querySelector('.basket_item');
            if (a) {
                document.querySelector('#basket').removeChild(a);
            };

            if (b) {
                document.querySelector('#basket').removeChild(b);
            };

            this.basket_generate();
            this.basket_show();
        }

        if (event.target.tagName == 'IMG') {
            this.zoomPict(event);
        }
    },

    zoomPict(event) {
        const picture = document.createElement('div');
        picture.classList.add('pict_window');

        document.body.appendChild(picture);

        picture.insertAdjacentHTML('afterbegin', `<img src="img_l/${event.path[1].lastElementChild.id}.jpg" alt="pic">`);

        picture.insertAdjacentHTML('afterbegin', `<img id="toclose" src="img_l/close.png" alt="close">`);

        const closeEl = document.querySelector('#toclose');
        closeEl.addEventListener('click', () => this.close())
    },

    close() {
        document.querySelector('.pict_window').remove();
    },
}

cart_review.init();
