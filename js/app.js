var app = angular.module('store', []);

app.controller('StoreController', function () {
    this.products = pizzas;
});

var pizzas = [
    {
        name: 'Hawaiian',
        price: 10.95,
        ingredients: 'Crispy crust, tomato sauce, ham pieces, and pineapple chunks, mixed peppers, mushrooms, and bacon.',
        canOrder: true,
        soldOut: false
    },
    {
        name: 'Supreme',
        price: 12,
        ingredients: 'Crispy crust, pepperoni, ham, beef, pork sausage, Italian sausage, red onions, mushrooms, green peppers, and black olives.',
        canOrder: true,
        soldOut: false
    }
];
