import {config} from '../config.js'

document.getElementById("home__search").addEventListener('click',function(){
   document.getElementById("form__home").classList.remove("none");
   document.getElementById("change__background--home").classList.add("change__background");
});
document.getElementById("form__close--home").addEventListener('click',function(){
    document.getElementById("form__home").classList.add("none");
    document.getElementById("change__background--home").classList.remove("change__background");
});
document.getElementById("create-order-home").addEventListener('click',function(){
  document.getElementById("form__home").classList.add("none");
  document.getElementById("change__background--home").classList.remove("change__background");
});


let submit_search = document.querySelector('#home__search').addEventListener('click', (e) => {
  e.preventDefault();
  const order_id = document.getElementById('search_id');
  get_order_by_id (order_id.value);
})

function get_order_by_id (id) {
    const url = `${config.API_URL}/api/order/${id}`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        }
    }).then((res) => {
        if (!res.ok) {
            console.log("Lỗi");
        } else {
            return res.json();
        }
    }).then((data) => {
        if (!data) {
            console.log('Lỗi');
        } else {
            console.log(data);
            document.querySelector('#oder-username-home').value = data.senderName;
            document.querySelector('#order-phone-home').value = data.senderNumber;
            document.querySelector('#order-address-home').value = data.senderAddress;
            document.querySelector('#recieve-phone-home').value = data.recipientNumber;
            document.querySelector('#recieve-name-home').value = data.recipientName;
            document.querySelector('#recieve-address-home').value = data.recipientAddress;
            document.querySelector('#product-name-home').value = data.productName;
            document.querySelector('#product-price-home').value = data.productPrice;
            document.querySelector('#product-kl-home').value = data.productWeight;
            document.querySelector('#product-quantity-home').value = data.productQuantity;
            document.querySelector('#product-length-home').value = data.productSizeLength;
            document.querySelector('#product-rong-home').value = data.productSizeWidth;
            document.querySelector('#product-heigh-home').value = data.productSizeHeight;
            document.querySelector('#order-code-home').value = data._id;
            document.querySelector('#bill-status-home').value = data.orderStatus;
            document.querySelector('#cho-xem-home').checked = (data.serviceLetCusSee.toString() === 'true') ? true : false;
        }
    })
}