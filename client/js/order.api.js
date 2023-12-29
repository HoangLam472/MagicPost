import {config} from '../config.js'

const order = {
    senderName: document.querySelector("#oder-username"),
    senderNumber: document.querySelector("#order-phone"),
    senderAddress: document.querySelector('#order-address'),
    senderProvince: document.querySelector('#order-address'),
    recipientNumber: document.querySelector("#recieve-phone"),

    recipientName: document.querySelector("#recieve-name"),
    recipientAddress: document.querySelector("#recieve-address"),
    recipientProvince: document.querySelector('#order-address'),
    recipientWard: document.querySelector('#order-address'),
    productName: document.querySelector('#product-name'),
    productPrice: document.querySelector("#product-price"),

    productWeight: document.querySelector("#product-kl"),
    productQuantity: document.querySelector("#product-quantity"),
    dai: document.querySelector('#product-length'),
    rong: document.querySelector("#product-rong"),

    cao: document.querySelector("#product-heigh"),
    ghi_chu: document.querySelector("#order-note"),
    status: document.querySelector('#bill-status'),
    serviceLetCusSee: document.querySelector("#cho-xem"),

    serviceFragile: document.querySelector("#chat-long")
};
const submit = document.querySelector("#create-order");

let button = submit.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm()
});

function validateForm() {

    // if (form.username.value === "") {
    //     console.log("Tên đăng nhập null");
    // }

    // if (form.password.value === "") {
    //     console.log("Mật khẩu null");
    // }
    // TODO: validate data

    if (true) {
        const data = {
            senderName: order.senderName.value,
            senderNumber: order.senderNumber.value,
            senderAddress: order.senderAddress.value,
            senderProvince: order.senderProvince.value,
            recipientNumber: order.recipientNumber.value,

            recipientName: order.recipientName.value,
            recipientAddress: order.recipientAddress.value,
            recipientProvince: order.recipientProvince.value,
            recipientWard: order.recipientWard.value,
            productName: order.productName.value,
            productPrice: order.productPrice.value,

            productWeight: order.productWeight.value,
            productQuantity: order.productQuantity.value,
            dai: order.dai.value,
            rong: order.rong.value,

            cao: order.cao.value,
            ghi_chu: order.ghi_chu.value,
            status: order.status.value,
            serviceLetCusSee: order.serviceLetCusSee.value === 'on' ? true : false,

            serviceFragile: order.serviceFragile.value === 'on' ? true : false
        }
        create_order(data);
    }
}

function create_order (order) {
    const url = `${config.API_URL}/api/order`;
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(order)
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
        }
    })
};

function get_all_order () {
    const url = `${config.API_URL}/api/order`;
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
        }
    })
}

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
        }
    })
}

function update_status (order_id, order_status) {
    const url = `${config.API_URL}/api/order/update`;
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({orderId: order_id, orderStatus: order_status})
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
        }
    })
}