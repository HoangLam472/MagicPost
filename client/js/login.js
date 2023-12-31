import {config} from '../config.js'

const form = {
    username: document.querySelector("#username"),
    password: document.querySelector("#pass"),
    role: document.querySelector('#role'),
    submit: document.querySelector("#submit"),
};

let button = form.submit.addEventListener("click", (e) => {
    e.preventDefault();
    validateForm()
});

function validateForm() {

    if (form.username.value === "") {
        console.log("Tên đăng nhập null");
    }

    if (form.password.value === "") {
        console.log("Mật khẩu null");
    }

    if (form.username.value !== "" && form.password.value !== "") {
        login_staff(form.username.value, form.password.value, form.role.value);
    }
}

function login_staff (username, password, role) {
    const login_url = role === 'admin'
        ? `${config.API_URL}/api/user/admin` 
            : (role === 'head-leader')
                ? `${config.API_URL}/api/user/head-of-transaction-point`
                : (role === 'leader' 
                    ? `${config.API_URL}/api/user/gathering-point-leader` 
                        : (role === 'transaction') ? `${config.API_URL}/api/user/login-Transactionpointstaff` 
                        : `${config.API_URL}/api/user/login-Assemblypointstaff`)
    fetch(login_url, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password: password })
    }).then((res) => {
        if (!res.ok) {
            alert("Sai tên đăng nhập hoặc mật khẩu")
            return;
        } else {
            return res.json();
        }
    }).then((data) => {
        if (!data) {
            alert("Lỗi server")
            return;
        } else {
            const role = data.role;
            window.sessionStorage.setItem('token', data.token);
            window.sessionStorage.setItem('role', data.role);
            window.sessionStorage.setItem('user', JSON.stringify(data));
            if (role === "admin") {
                window.open("/client/admin/admin.html", "_self");
            } else if (role === "gathering point leader") {
                window.open("/client/manager/manager.html", "_self");
            } else if (role === "assembly point staff") {
                window.open("/client/staff/staff1.html", "_self");
            } else if (role === "transaction point staff") {
                window.open("/client/staff/staff.html", "_self");
            } else if (role === "head of transaction point") {
                window.open("/client/manager/manager1.html", "_self");
            }
        }
    })
};