var username= document.forms['form']['username'];
var password= document.forms['form']['password']

var username_error= document.getElementById('username_error')
var password_error= document.getElementById('password_error')

username.addEventListener('textInput', username_Verify);
password.addEventListener('textInput', password_Verify);

function validated(){
    if (username.value.length < 9) {
        username.style.border = "1px solid red"
        username_error.style.display = "block";
        username.focus();
        return false;
    }

    if (password.value.length < 8) {
        password.style.border = "1px solid red"
        password_error.style.display = "block";
        password.focus();
        return false;
    }
}

function username_Verify(){
    if (username.value.length < 9) {
        username.style.border = "1px solid red"
        username_error.style.display = "none";
        return true;
    }
}

function username_Verify(){
    if (password.value.length < 9) {
        password.style.border = "1px solid red"
        password_error.style.display = "none";
        return true;
    }
}