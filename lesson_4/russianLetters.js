function countVowels() {

    var str = prompt('Введите слово для подсчета гласных', '');

    if (str == null) {
        alert('Жаль, что вы ничего не ввели');
        return;
    }
    
    str = str.toLocaleLowerCase();
    var target = ['а', 'я', 'о', 'ё', 'и', 'ы', 'е', 'э', 'у', 'ю']; // что нужно найти
    var count = 0;
    var pos = 0;
    var i = 0;
    while (true) {
        
        var foundPos = str.indexOf(target[i], pos);
        
        if ((foundPos == -1) && (i == target.length - 1)) {
            break;
        } else if (foundPos == -1) {
            i++; 
            pos = 0; // обнуляем позицию
        } else if (foundPos !== -1) {
            count++;
            pos = foundPos + 1;
        }
    }
    return count;
}

console.log(countVowels());
