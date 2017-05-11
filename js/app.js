var app = angular.module('store', []);

app.controller('StoreController', function () {
    this.products = superfoods;
});

app.controller('PanelController', function () {
    this.tab = 1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
    };

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    };
});

app.controller('ReviewController', function(){
    this.review = {};
});

var superfoods = [
    {
        name: 'Organic Raw Chocolate Goji and Coconut',
        price: 6.75,
        tagline: 'Full of antioxidants, this bar is scrumptiously crunchy and really hits the spot.',
        ingredients: 'Cacao powder, cacao butter, and agave nectar, coconut butter, carob powder, goji berries (10%), coconut chips (6%), cinnamon and Himalayan salt.  Cacao solids 50% minimum.',
        benefits: 'Our raw, hand-made chocolate is certified as organic, vegetarian and vegan, and sweetened only with agave nectar. It is gluten, dairy and soya free – with a low gi and gl.',
        images: [
            {
                full: './images/chocolate/full.png',
                slice: './images/chocolate/thumb.png'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: 'Great product!',
                author: 'amanda@health.com'
            },
            {
                stars: 4,
                body: 'A bit bitter for me, but still very healthy :)',
                author: 'david@healthytech.com'
            }
        ],
        canOrder: true,
        soldOut: false
    },
    {
        name: 'Coconut Chunks',
        price: 7,
        tagline: 'A simple snack with a delicious taste and a delightful crunch.',
        ingredients: 'Coconut, cane sugar, salt.',
        benefits: 'Rich in both dietary fibre and cholesterol-friendly, metabolism-boosting medium-chain triglycerides , it’s also a very healthy way to satisfy those between-meal cravings. Kids love these, too!',
        images: [
            {
                full: './images/coconut/full.png',
                slice: './images/coconut/thumb.png'
            }
        ],
        reviews: [
            {
                stars: 5,
                body: 'Yum! Love it!',
                author: 'sarah@healthykids.com'
            }
        ],
        canOrder: true,
        soldOut: false
    }
];
