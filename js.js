const pw1 = document.querySelector('#password');
const pw2 = document.querySelector('#confirm');
const error = document.querySelector('.error');

pw2.addEventListener("input", (event) => {
    if(pw1.value !== pw2.value){
        pw1.classList.add('invalid');
        pw2.classList.add('invalid');
        error.textContent = 'Passwords No Matchy';
    }

    if(pw1.value === pw2.value){
        error.textContent = '';
        pw1.classList.remove('invalid');
    }

})

