function palinrom(word) {
    word = word.toLowerCase();
    const lastIndex = word.length - 1;
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] !== word[lastIndex - i]) {
            return false;
        }
    }
    return true;
}
function checkPalindrom() {
    alert(palinrom('Racecar'));
}