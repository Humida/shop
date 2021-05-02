function sumPrice() {

    var quantity = Array.from(document.querySelectorAll('.quantity'));
    var price = Array.from(document.querySelectorAll('.check__item-price'));

    quantity = quantity.map((quantity) => quantity.innerHTML);
    price = price.map((price) => price.innerHTML);

    let sum = 0
    for (let i = 0; i < price.length; i++) {
        sum = quantity[i] * price[i] + sum;
    }
    return sum;
}

function dispayCartValue() {
    let sum = sumPrice();

    let sumElement = document.querySelector('.cart__price-sum');
    let pay = document.querySelector('.cart__pay-value');
    sumElement.innerHTML = 'Tổng là : ' + sum;
    pay.innerHTML = 'Phải trả : ' + sum;
}

dispayCartValue();

let check = document.querySelector('.step__checkout-check');
let input = document.querySelector('.step__checkout-input');
let buttonCartPay = document.querySelector('.button-cart__pay');


let cartCheckContainer = document.querySelector('.cart__check-container');
let customerInfo = document.querySelector('.customer__info');

[input, buttonCartPay].forEach((item) => {

    item.addEventListener('click',
        function nav() {

            if (check.className.includes('active')) {
                cartCheckContainer.classList.add('active');
                customerInfo.classList.remove('active');

            } else {
                cartCheckContainer.classList.remove('active');
                customerInfo.classList.add('active');
            }
        }
    )
})

check.addEventListener('click', function nav() {

    if (check.className.includes('active') == false) {
        cartCheckContainer.classList.add('active');
        customerInfo.classList.remove('active');

    } else {
        cartCheckContainer.classList.remove('active');
        customerInfo.classList.add('active');
    }
})

var nameItem = document.querySelectorAll('.check-item__desc-name');
var quantity = document.querySelectorAll('.quantity');

let buttonForm = document.querySelector('.form-order>button');





nameItem = Array.from(nameItem).map(item => item.innerHTML);
quantity = Array.from(quantity).map(item => item.innerHTML);

var result = {};
nameItem.forEach(function(key, i) { result[key] = quantity[i] });

console.log(result);


buttonForm.addEventListener('click', getValue);


function getValue() {
    let name = document.querySelector('[name="nameUser"]').value;
    let phone = document.querySelector('[name="phoneNumber"]').value;
    let address = document.querySelector('[name="addressOrder"]').value;
    let dataArray = [];

    dataArray.push(result);
    dataArray.push(name);
    dataArray.push(phone);
    dataArray.push(address);
    console.log(dataArray);

    document.querySelector('.done').style.display = "flex";
    document.querySelector('.step__checkout').style.display = "none";


    cartCheckContainer.classList.remove('active');
    customerInfo.classList.remove('active');

    axios.post('http://localhost:4000/cart/order', dataArray)
        .then(response => console.log(response))
        .catch(error => console.log(error))

}