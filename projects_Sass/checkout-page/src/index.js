const productOne = document.getElementById('product1')
const productTwo = document.getElementById('product2')
let productOneAmount = document.getElementById('vintage-amount');
let productTwoAmount = document.getElementById('levi-amount');
const inputs = document.querySelectorAll('input');
const form = document.getElementById('form__box');

productOne.addEventListener('click', e => {
    addAmount(e, productOneAmount)
})

productTwo.addEventListener('click', e => {
    addAmount(e, productTwoAmount)
})


const addAmount = (e, amount) => {
    if (e.target.closest('button')?.dataset.add === 'add') {
        amount.value = parseInt(amount.value) + 1
    }

    if (e.target.closest('button')?.dataset.subtract === 'subtract') {
        if (amount.value > 0)
            amount.value = parseInt(amount.value) - 1
    }
}

//SECTION VALIDATION INPUS FROM FORMULARY
const expressions = {
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/,
    user: /^[a-zA-Z0-9\_\-]{4,16}$/,
    address: /^[a-zA-Z0-9\_\-]{4,16}$/,
    city: /^[a-zA-Z0-9\_\-]{4,16}$/,
}

const fields = {
    email: false,
    phone: false,
    user: false,
    address: false,
    country: true,
    city: false
}

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

}

const validateField = (expression, input, field) => {
    if (expression.test(input.value)) {
        let box = document.getElementById(`${field}`).parentNode
        box.classList.remove('input__box--incorrect')
        box.classList.add('input__box--correct')
        fields[field] = true;
    } else {
        let box = document.getElementById(`${field}`).parentNode
        box.classList.add('input__box--incorrect')
        box.classList.remove('input__box--correct')
        fields[field] = false;
    }
}

inputs.forEach(input => {
    input.addEventListener('keyup', validationForm)
    input.addEventListener('blur', validationForm)
})

form.addEventListener('submit', e => {
    e.preventDefault()

    const terms = document.getElementById('form__checkbox-box')
    if (terms.checked && fields.email && fields.phone && fields.city && fields.address && fields.user) {

        console.log(terms.checked, fields.email, fields.phone, fields.city, fields.address, fields.user)
        form.reset();
        alert('valid data to continue')
    } else {
        console.log(terms.checked, fields.email, fields.phone, fields.city, fields.address, fields.user)
        form.reset()
        alert('error to continue, some boxes are empty or not well written ')
    }

})


// (function() {
//   class Item {
//     set amount(value) {
//       const val = parseInt(value);
//       this._amount = this.amountEl.value = (isNaN(val) || val <= 0) ? 1 : val;

//       const price = (this.amount * this.price).toFixed(2);
//       const priceOld = (this.amount * this.priceOld).toFixed(2);

//       this.priceEl.textContent = `$${price}`;
//       this.priceOldEl.textContent = `$${priceOld}`;

//       if (typeof this.amountChangedCallback === 'function') {
//         this.amountChangedCallback();
//       }
//     }

//     get amount() {
//       return this._amount;
//     }

//     constructor(opts) {
//       const {amount, price, priceOld, el, amountChangedCallback} = opts;

//       this.el = el;
//       this._amount = amount;
//       this.price = price;
//       this.priceOld = priceOld;
//       this.amountChangedCallback = amountChangedCallback;

//       this.priceEl = el.querySelector('.item__price :first-child');
//       this.priceOldEl = el.querySelector('.item__price span + span');
//       this.amountEl = el.querySelector('.item__amount .amount');
//       this.addEl = el.querySelector('.item__amount .add');
//       this.subEl = el.querySelector('.item__amount .subtract');

//       this.amountEl.addEventListener('blur', this.amountChanged.bind(this));
//       this.addEl.addEventListener('click', this.add.bind(this));
//       this.subEl.addEventListener('click', this.sub.bind(this));

//       this.priceEl.textContent = `$${price}`;
//       this.priceOldEl.textContent = `$${priceOld}`;
//       this.amountEl.value = amount;
//     }

//     amountChanged(e) {
//       this.amount = e.target.value;
//     }

//     add() {
//       this.amount++;
//     }

//     sub() {
//       this.amount--;
//     }
//   }

//   const item1 = new Item({
//     amount: 1,
//     price: 54.99,
//     priceOld: 94.99,
//     el: document.getElementById('item1'),
//     amountChangedCallback: amountChanged,
//   });

//   const item2 = new Item({
//     amount: 1,
//     price: 74.99,
//     priceOld: 124.99,
//     el: document.getElementById('item2'),
//     amountChangedCallback: amountChanged,
//   });

//   const totalEl = document.getElementById('total');
//   const items = [item1, item2];

//   function amountChanged() {
//     const total = items.reduce((prev, item) => {
//       prev += item.amount * item.price;
//       return prev;
//     }, 0);

//     totalEl.textContent = `$${total.toFixed(2)}`;
//   }
// })();


