function mail() {
    var mailInput = document.getElementsByClassName('field')[0];

    if (
        mailInput.value.indexOf('@') != mailInput.value.lastIndexOf('@') ||
        mailInput.value.indexOf('@') < 2 ||
        mailInput.value.lastIndexOf('.') > mailInput.value.length - 3 ||
        mailInput.value.lastIndexOf('.') <= mailInput.value.indexOf('@') + 2

    ) {
        document.getElementsByClassName('logInMessage')[0].innerHTML = 'Invalid email address';
        mailInput.setAttribute("style", "border: 1px solid #FF8A80");
    } else {
        document.getElementsByClassName('logInMessage')[0].innerHTML = '';
        mailInput.setAttribute("style", "border: 1px solid #ddd");
    }
}

function pass() {
    var passwordInput = document.getElementsByClassName('field')[1];

    if (passwordInput.value.length < 3) {
        document.getElementsByClassName('logInMessage')[1].innerHTML = 'Minimum 3 characters';
        passwordInput.setAttribute("style", "border: 1px solid #FF8A80");
    } else {
        document.getElementsByClassName('logInMessage')[1].innerHTML = '';
        passwordInput.setAttribute("style", "border: 1px solid #ddd");
    }
}
