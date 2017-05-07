var app = angular.module('store', []);

app.controller('StoreController', function () {
    this.products = pizzas;
});

var pizzas = [
    {
        name: 'Hawaiian',
        price: 10.95,
        ingredients: 'Crispy crust, tomato sauce, ham pieces, and pineapple chunks, mixed peppers, mushrooms, and bacon.',
        images: [
            {
                full: './images/hawaiian/full.png',
                thumb: './images/hawaiian/thumb.png'
            }
        ],
        canOrder: true,
        soldOut: false
    },
    {
        name: 'Supreme',
        price: 12,
        ingredients: 'Crispy crust, pepperoni, ham, beef, pork sausage, Italian sausage, red onions, mushrooms, green peppers, and black olives.',
        images: [
            {
                full: './images/supreme/full.png',
                thumb: './images/supreme/thumb.png'
            }
        ],
        canOrder: true,
        soldOut: false
    }
];
