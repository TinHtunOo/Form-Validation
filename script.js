const form = document.querySelector('form');
const passwordE1 = document.querySelector('#password');
const passwordE2 = document.querySelector('#c-password');
const message = document.querySelector('.message');
let isvalid = false;
let userData =[];

function valiadeFrom () {
       console.log(form.checkValidity())
    if (passwordE1.value !== passwordE2.value) {
        message.textContent = 'Please match the password!!!';
        message.style.color = 'red';
        message.style.borderColor = 'red';
        passwordE1.style.borderColor ='red';
        passwordE2.style.borderColor ='red';
        isvalid = false;
        return;
    } else {
        message.textContent = 'Registeration Success!!!';
        message.style.color = 'green';
        message.style.borderColor = 'green';
        passwordE1.style.borderColor ='green';
        passwordE2.style.borderColor ='green';
        isvalid = true;
    }
    
}

function storeData() {
    if (isvalid) {
        userData = {
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            website: form.website.value,
            password: form.password.value,
        }
    }
    console.log(userData)
}


function processData(e) {
    e.preventDefault();
    // valiade form
    valiadeFrom();
    storeData();
}

// EVENT Listener
form.addEventListener('submit', processData)