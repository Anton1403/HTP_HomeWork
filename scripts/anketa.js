function result() {
    checkName();
    checkAge();
    alert('Ваше ФИO: ' + secName + ' ' + firstName + ' ' + patronymic +
          '\n' + 'Ваш возраст: ' + years +  
          '\n' + 'Возраст в днях: ' + (years * 365) + 
          '\n' + 'Возраст через 5 лет: ' + (years + 5) + 
          '\n' + 'Ваш пол: ' + checkSex() +
          '\n' + 'Вы на пенсии: ' + isRetired());
}


var secName;
var firstName;
var patronymic;
function checkName() {
    while (true) {
        secName = prompt('Введите вашу фамилию', '');
        firstName = prompt('Введие ваше имя', '');
        patronymic = prompt('Введите ваше отчество', '');
        if (secName == null || firstName == null || patronymic == null) {
            alert('Введите корректные данные');
        } else {
            break;
        }
    }
}

var years;
function checkAge() {
    while (true) {
        years = +prompt('Введите ваш возраст: ', 0);
        if (years <= 0) {
            alert('Введите корректный возраст');
        } else {
            break;
        }
    }
}


var sex;
function checkSex() {
    sex = confirm('Ваш пол - мужской?');
    if (sex) {
        return 'мужской';
    } else {
        return 'женский';
    }
}

function isRetired() {
    if ((sex && years >= 60) || (!sex && years >= 55)) {
        return 'да';
    } else {
        return 'нет';
    }
}

