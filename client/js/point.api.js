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

function get_all_user () {
    const token = window.sessionStorage.getItem('token');
    const url = `${config.API_URL}/api/user/all-users`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
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
                if (objArr[i].role.includes('staff') ) {
                    const id = objArr[i]._id;
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
<<<<<<< HEAD
                    c6.innerHTML = '<td><input type="button" class="delete__nv" id="delete__nv" value="Delete" onclick="SomeDeleteRowFunction(this)"></td>'

    
=======
                    c6.innerHTML = '<td><input type="button" class="delete__nv" value="Delete" onclick="SomeDeleteRowFunction(this)"></td>'
                    c6.firstChild.setAttribute('id', id);
>>>>>>> origin/main
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

let add_user = document.querySelector('#btn-manager').addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('add-email')
    const userName = document.getElementById('add-username')
    const phone = document.getElementById('add-phone')
    const address = document.getElementById('add-address')
    const password = document.getElementById('add-password')
    post_add_user(email.value, userName.value, phone.value, address.value, password.value);
})

function post_add_user (email, username, phone, address, password) {
    const token = window.sessionStorage.getItem('token')
    const url = `${config.API_URL}/api/user/register`;
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({email: email, userName: username, phone: phone, address: address, password: password, role: 'transaction point staff'})
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

// let getOptions = document.getElementById("add-nv").addEventListener('click', (e) => {
//     e.preventDefault();
//     data();
// })

// const data = () => {
//     const data = get_all_point();
// }

// function get_all_point () {
//     const url = `${config.API_URL}/api/point`;
//     fetch(url, {
//         method: 'GET',
//         headers: {
//             Accept: "application/json, text/plain, */*",
//             "Content-Type": "application/json",
//         }
//     }).then((res) => {
//         if (!res.ok) {
//             alert('Lỗi dữ liệu');
//             return;
//         } else {
//             return res.json();
//         }
//     }).then((data) => {
//         if (!data) {
//             alert('Lỗi dữ liệu')
//             return;
//         } else {
//             const objArr = data;
//             document.querySelector("#add-point-option").innerHTML = "";
//             for(let i = 0; i< objArr.length; i++){
//                 let o1 = document.createElement("option");
//                 o1.innerHTML = `${objArr[i].pointName} - ${objArr[i].pointAddress}`;
//                 o1.setAttribute("value", objArr[i]._id);
//                 document.querySelector("#add-point-option").append(o1);
//             }
//         }
//     })
// }

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