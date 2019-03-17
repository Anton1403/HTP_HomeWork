function countRemainder(a, b) {
    
    var result = a / b;
    
    if (a % b == 0) {
        alert('Делится без остатка, результат: ' + result);
    } else {
        alert('Делится с остатком: ' + a % b);
    }
}
