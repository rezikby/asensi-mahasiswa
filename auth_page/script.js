var $form = document.querySelector('.form');
var $error = document.querySelector('.error');
var $inputFields = document.querySelectorAll('.input-field');
var $email = document.getElementById('email');
var $password = document.getElementById('password');

function addError(message) {
    $error.innerHTML = message;
    $error.style.display = 'block';
}

function removeError() {
    $error.innerHTML = '';
    $error.style.display = 'none';
}

function validate(event) {
    event.preventDefault();
    removeError();


    // if ($email.value.trim() === '' || $password.value.trim() === '') {
    //     addError('Email atau password dak boleh kosong');
    //     return;
    // }

    if ($email.value !== 'admin@example.com' || $password.value !== 'password') {
        addError('Email atau password salah');
        return;
    }

    removeError();
    alert('Anda Berhasil Login!');
}

$form.addEventListener('submit', validate);
