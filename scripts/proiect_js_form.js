var x = document.getElementsByClassName('field')[0];
var y = document.getElementsByClassName('field')[1];

function mail() {
    if (
        x.value.indexOf('@') != x.value.lastIndexOf('@') ||
        x.value.indexOf('@') < 2 ||
        x.value.lastIndexOf('.') > x.value.length - 3 ||
        x.value.lastIndexOf('.') <= x.value.indexOf('@') + 3

    ) {
        document.getElementsByTagName('span')[0].innerHTML = 'E-mail incorect';
    } else {
        document.getElementsByTagName('span')[0].innerHTML = '';
    }
}

function pass() {
    if (y.value.length < 3) {
        document.getElementsByTagName('span')[1].innerHTML = 'Minim 3 caractere';
    } else {
        document.getElementsByTagName('span')[1].innerHTML = '';
    }
}
