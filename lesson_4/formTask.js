function check() {
    
    var name = document.getElementById('firstName').value.trim();
    var secName = document.getElementById('secName').value.trim();
    var pass = document.getElementById('pass').value.length;
    var mail = document.getElementById('email').value;
    var count = 0;
    
    for (var i = 0; i < mail.length; i++) {
        if (mail[i].includes('@')) {
            ++count;
        }
    }

    if ((document.getElementById('firstName').value == name) 
        && (document.getElementById('secName').value == secName) 
        && count === 1 && pass >= 5 && !mail.includes(' ')) {
        alert(true)
    } else {
        alert(false) ;
    }
}