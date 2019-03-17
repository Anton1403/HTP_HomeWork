function findWords() {
    var str = prompt('Оставить комментарий','');
    str = str.toLowerCase();
    
    var censured = {
        'сука' : 'censured',
        'бля' : 'censured'
    };
    
    for (var key in censured) {
        str = str.split(key).join(censured[key]);
    }
    alert(str);
}
