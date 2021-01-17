const inputEmail1 = document.getElementById('inputEmail1')
const inputPassword1 = document.getElementById('inputPassword1')
const form = document.getElementById('form')
const errors = document.getElementById('errors')
const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
errors.style.color = 'red'

form.addEventListener('submit', (e) => {
    e.preventDefault()   
    console.log('check')
    let errorMessages = [];
    if (inputEmail1.value === '' || inputEmail1.value == null){
        errorMessages.push('Emailfield is requiered.')
    }
    if (!filter.test(inputEmail1.value)) {
        errorMessages.push('Emailfield must contain @.');
    }
    if (inputPassword1.value === '' || inputPassword1.value == null){
        errorMessages.push('Enter a password.')
    }
    errors.innerHTML = errorMessages.join(', ')
    return false;
})