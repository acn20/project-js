var x = document.getElementsByClassName('field')[0];
var y = document.getElementsByClassName('field')[1];

function mail() {
    if (
        x.value.indexOf('@') != x.value.lastIndexOf('@') ||
        x.value.indexOf('@') < 2 ||
        x.value.lastIndexOf('.') > x.value.length - 3 ||
        x.value.lastIndexOf('.') <= x.value.indexOf('@') + 3

    ) {
        document.getElementsByTagName('span')[0].innerHTML = 'Incorrect email address';
    } else {
        document.getElementsByTagName('span')[0].innerHTML = '';
    }
}

function pass() {
    if (y.value.length < 3) {
        document.getElementsByTagName('span')[1].innerHTML = 'Minimum 3 characters';
    } else {
        document.getElementsByTagName('span')[1].innerHTML = '';
    }
}
