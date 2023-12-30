import {config} from '../config.js'

function create_point (point) {
    const url = `${config.API_URL}/api/point`;
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(point)
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

let update = document.querySelector('#update-list-user').addEventListener('click', (e) => {
    e.preventDefault();
    get_all_user();
})

let update2 = document.querySelector('#list__1--items-title1').addEventListener('click', (e) => {
    e.preventDefault();
    get_all_user();
})

function get_all_user () {
    const url = `${config.API_URL}/api/user/all-users`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        }
    }).then((res) => {
        if (!res.ok) {
            alert('Lỗi dữ liệu');
            return;
        } else {
            return res.json();
        }
    }).then((data) => {
        if (!data) {
            alert('Lỗi dữ liệu')
            return;
        } else {
            const objArr = data
            document.querySelector("#tb-danh-sach-nhan-vien tbody").innerHTML = "";
            let count = 0;
            for(let i = 0; i< objArr.length; i++){
                if (objArr[i].role === 'assembly point staff') {
                    let tr = document.createElement("tr");
                    let c1 = document.createElement("td");
                    let c2 = document.createElement("td");
                    let c3 = document.createElement("td");
                    let c4 = document.createElement("td");
                    let c5 = document.createElement("td");
                    let c6 = document.createElement("td");
                    
                    c1.innerHTML = ++count;
                    c2.innerHTML = objArr[i].userName;
                    c3.innerHTML = objArr[i].email;
                    c4.innerHTML = objArr[i].phone;
                    c5.innerHTML = objArr[i].address ;
                    c6.innerHTML = '<td><input type="button" class="delete__nv" value="Delete" onclick="SomeDeleteRowFunction(this)"></td>'

    
                    tr.appendChild(c1);
                    tr.appendChild(c2);
                    tr.appendChild(c3);
                    tr.appendChild(c4);
                    tr.appendChild(c5);
                    tr.appendChild(c6);
    
                    document.querySelector("#tb-danh-sach-nhan-vien tbody").appendChild(tr);
                }
            }
        }
    })
}

let add_user = document.querySelector('#add-user').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('add-email')
    const point = document.getElementById('point-option')
    const userName = document.getElementById('add-username')
    const phone = document.getElementById('add-phone')
    const address = document.getElementById('add-address')
    const password = document.getElementById('add-password')
    post_add_user(email.value, point.value, userName.value, phone.value, address.value, password.value);
})

function post_add_user (email, point, username, phone, address, password) {
    const url = `${config.API_URL}/api/user/register/${point}`;
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, userName: username, phone: phone, address: address, password: password})
    }).then((res) => {
        if (!res.ok) {
            alert('Lỗi dữ liệu');
            return;
        } else {
            return res.json();
        }
    }).then((data) => {
        if (!data) {
            alert('Lỗi dữ liệu')
            return;
        } else {
            alert('Thêm thành công')
        }
    })
}

let getOptions = document.getElementById("add-user-btn").addEventListener('click', (e) => {
    e.preventDefault();
    data();
})

const data = () => {
    const data = get_all_point();
    console.log(data);
}

function get_all_point () {
    const url = `${config.API_URL}/api/point`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
        }
    }).then((res) => {
        if (!res.ok) {
            alert('Lỗi dữ liệu');
            return;
        } else {
            return res.json();
        }
    }).then((data) => {
        if (!data) {
            alert('Lỗi dữ liệu')
            return;
        } else {
            const objArr = data;
            document.querySelector("#point-option").innerHTML = "";
            for(let i = 0; i< objArr.length; i++){
                let o1 = document.createElement("option");
                o1.innerHTML = `${objArr[i].pointName} - ${objArr[i].pointAddress}`;
                o1.setAttribute("value", objArr[i]._id);
                document.querySelector("#point-option").append(o1);
            }
        }
    })
}

function get_point_by_id (id) {
    const url = `${config.API_URL}/api/point/${id}`;
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