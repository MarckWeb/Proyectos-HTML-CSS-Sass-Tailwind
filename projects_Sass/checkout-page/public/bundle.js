'use strict';

const productOne = document.getElementById('product1');
const productTwo = document.getElementById('product2');
let productOneAmount = document.getElementById('vintage-amount');
let productTwoAmount = document.getElementById('levi-amount');
const inputs = document.querySelectorAll('input');
const form = document.getElementById('form__box');

productOne.addEventListener('click', e => {
    addAmount(e, productOneAmount);
});

productTwo.addEventListener('click', e => {
    addAmount(e, productTwoAmount);
});


const addAmount = (e, amount) => {
    if (e.target.closest('button')?.dataset.add === 'add') {
        amount.value = parseInt(amount.value) + 1;
    }

    if (e.target.closest('button')?.dataset.subtract === 'subtract') {
        if (amount.value > 0)
            amount.value = parseInt(amount.value) - 1;
    }
};

//SECTION VALIDATION INPUS FROM FORMULARY
const expressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/,
    user: /^[a-zA-Z0-9\_\-]{4,16}$/,
    address: /^[a-zA-Z0-9\_\-]{4,16}$/,
    city: /^[a-zA-Z0-9\_\-]{4,16}$/,
};

const fields = {
    email: false,
    phone: false,
    user: false,
    address: false,
    country: true,
    city: false
};

const validationForm = (e) => {
    switch (e.target.name) {
        case 'email':
            validateField(expressions.email, e.target, 'email');
            break;


        case 'phone':
            validateField(expressions.phone, e.target, 'phone');
            break;

        case 'user':
            validateField(expressions.user, e.target, 'user');
            break;

        case 'address':
            validateField(expressions.address, e.target, 'address');
            break;

        case 'city':
            validateField(expressions.city, e.target, 'city');
            break;
    }

};

const validateField = (expression, input, field) => {
    if (expression.test(input.value)) {
        let box = document.getElementById(`${field}`).parentNode;
        box.classList.remove('input__box--incorrect');
        box.classList.add('input__box--correct');
        fields[field] = true;
    } else {
        let box = document.getElementById(`${field}`).parentNode;
        box.classList.add('input__box--incorrect');
        box.classList.remove('input__box--correct');
        fields[field] = false;
    }
};

inputs.forEach(input => {
    input.addEventListener('keyup', validationForm);
    input.addEventListener('blur', validationForm);
});

form.addEventListener('submit', e => {
    e.preventDefault();

    const terms = document.getElementById('form__checkbox-box');
    if (terms.checked && fields.email && fields.phone && fields.city && fields.address && fields.user) {

        console.log(terms.checked, fields.email, fields.phone, fields.city, fields.address, fields.user);
        form.reset();
        alert('valid data to continue');
    } else {
        console.log(terms.checked, fields.email, fields.phone, fields.city, fields.address, fields.user);
        form.reset();
        alert('error to continue, some boxes are empty or not well written ');
    }

});
