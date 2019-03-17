function getNumWordUsingSwitch(num, word1, word2, word3) {
    var d = num % 10;
    var dd = num % 100;
    
    // switch for 111-119 number exception
    
    switch(dd) {
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
            return word3;
            break;
    }
    
//    switch for 1-4 number exception, else uses default
    
    switch(d) {
        case 1:
            return word1;
            break;
        case 2:
        case 3:
        case 4:
            return word2;
            break;
        default:
            return word3;
    }
}

function checkApples() {
    var apple = +prompt('сколько у вас яблок?', 0);
    alert('У вас ' + apple + ' ' + getNumWordUsingSwitch(apple, 'яблоко', 'яблока', 'яблок'));
}
