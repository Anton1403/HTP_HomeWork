function countPrice() {
    
    var sum = 0;
    
    var items = [{
        id: 1,
        name: 'Леденец',
        unitOfMeasure: 'штук',
        number: 10,
        price: 0.5
    }, {
        id: 2,
        name: 'Сигареты',
        unitOfMeasure: 'пачки',
        number: 4,
        price: 2.5
    }, {
        id: 3,
        name: 'Печенье',
        unitOfMeasure: 'коробки',
        number: 2,
        price: 1.5
    }
];
    
    for (var i = 0; i < items.length; i++) {
        sum += items[i].number * items[i].price;
    }
    console.log(sum);
}