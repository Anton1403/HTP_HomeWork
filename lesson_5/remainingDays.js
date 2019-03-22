function countDays() {

    let bd = new Date(document.getElementById('dateOfBirthday').value);
    let now = new Date();
    bd.setFullYear(now.getFullYear());
    
    if (bd <= now) {
        bd.setFullYear(bd.getFullYear() + 1);
    }
    
    let diff = Math.ceil((bd - now) / 1000 / 60 / 60 / 24);
    document.getElementById('remainingDays').innerHTML = diff;
}
