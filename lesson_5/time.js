function secForDaysEnd() {
    var now = new Date();
    var end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    var diff = end - now; 
    var secForEnd = Math.round(diff / 1000);
    console.log('До конца дня: ' + secForEnd + ' сек.');

    var endOfDay = moment().endOf('day').fromNow();  // в часах
    console.log(endOfDay);
}

