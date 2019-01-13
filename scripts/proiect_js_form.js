var x = document.getElementsByClassName('field')[0];
var y = document.getElementsByClassName('field')[1];

function mail() {
    if (
        x.value.indexOf('@') != x.value.lastIndexOf('@') ||
        x.value.indexOf('@') < 2 ||
        x.value.lastIndexOf('.') > x.value.length - 3 ||
        x.value.lastIndexOf('.') <= x.value.indexOf('@') + 2

    ) {
        document.getElementsByClassName('logInMessage')[0].innerHTML = 'Incorrect email address';
        x.setAttribute("style", "border: 1px solid #FF8A80");
    } else {
        document.getElementsByClassName('logInMessage')[0].innerHTML = '';
        x.setAttribute("style", "border: 1px solid #ddd");
    }
}

function pass() {
    if (y.value.length < 3) {
        document.getElementsByClassName('logInMessage')[1].innerHTML = 'Minimum 3 characters';
        y.setAttribute("style", "border: 1px solid #FF8A80");
    } else {
        document.getElementsByClassName('logInMessage')[1].innerHTML = '';
        y.setAttribute("style", "border: 1px solid #ddd");
    }
}
