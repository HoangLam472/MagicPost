import { config } from '../config.js'

const form = {
    userName: document.getElementById('admin-username'),
    phone: document.getElementById('admin-phone'),
    role: document.getElementById('admin-role'),
    postOfficeId: document.getElementById('admin-post-office'),
    email: document.getElementById('admin-email'),
    password: document.getElementById('admin-pass'),
    address: document.getElementById('admin-address'),
}
let add_user = document.getElementById('btn-admin').addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
        userName: form.userName.value,
        phone: form.phone.value,
        role: form.role.value,
        postOfficeId: form.postOfficeId.value,
        email: form.email.value,
        password: form.password.value,
        address: form.address.value
    }
    post_add_user(data);
})

document.getElementById("icon__refresh").addEventListener('click', (e) => {
    get_all_user()
});

function get_all_user() {
    const token = window.sessionStorage.getItem('token');
    const url = `${config.API_URL}/api/user/get-system-user`;
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
            document.querySelector("#table2 tbody").innerHTML = "";
            let count = 0;
            for (let i = 0; i < objArr.length; i++) {
                const id = objArr[i]._id;
                let tr = document.createElement("tr");
                let c1 = document.createElement("td");
                let c2 = document.createElement("td");
                let c3 = document.createElement("td");
                let c4 = document.createElement("td");
                let c5 = document.createElement("td");
                let c6 = document.createElement("td");
                let c7 = document.createElement("td");
                let c9 = document.createElement("td");

                c1.innerHTML = ++count;
                c2.innerHTML = objArr[i]._id;
                c3.innerHTML = objArr[i].userName;
                c4.innerHTML = objArr[i].phone;
                c5.innerHTML = objArr[i].role === "admin" 
                    ? "Admin" 
                        : objArr[i].role === "head of transaction point" 
                        ? "Trưởng điểm GD" 
                            : objArr[i].role === "gathering point leader" 
                            ? "Trưởng điểm TK" 
                                : objArr[i].role === "assembly point staff" 
                                ? "Nhân viên điểm TK" 
                                    : "Nhân viên điểm GD" ;
                c6.innerHTML = objArr[i].address;
                c7.innerHTML = objArr[i].email;
                c9.innerHTML = '<td><input type="button" class="delete__nv" value="Delete" onclick="SomeDeleteRowFunction(this)"></td>'
                c9.firstChild.setAttribute('id', id);

                tr.appendChild(c1);
                tr.appendChild(c2);
                tr.appendChild(c3);
                tr.appendChild(c4);
                tr.appendChild(c5);
                tr.appendChild(c6);
                tr.appendChild(c7);
                tr.appendChild(c9);

                document.querySelector("#table2 tbody").appendChild(tr);
            }
        }
    })
}


function post_add_user(data) {
    const token = window.sessionStorage.getItem('token')
    const url = `${config.API_URL}/api/user/register`;
    fetch(url, {
        method: 'POST',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(data)
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
