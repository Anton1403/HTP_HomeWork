function check() {
    
    var name = document.getElementById('firstName').value.trim();
    var secName = document.getElementById('secName').value.trim();
    
    if ((document.getElementById('firstName').value == name) 
        && (document.getElementById('secName').value == secName)) {
        alert(true)
    } else {
        alert(false) ;
    }
}