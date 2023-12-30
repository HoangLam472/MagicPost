// http://localhost:8080/api/order/all-order-in-point
import {config} from '../config.js'

let crawl_data = document.querySelector('#list__1--items-title2').addEventListener('click', (e) => {
    e.preventDefault();
    get_all_order_by_point();
})

function get_all_order_by_point () {
    const token = window.sessionStorage.getItem('token');
    const url = `${config.API_URL}/api/order/all-order-in-point`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
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
            const objArr = data
            document.querySelector("#table3 tbody").innerHTML = "";
            let count = 0;
            for(let i = 0; i< objArr.length; i++){
                if (objArr[i].role === 'assembly point staff') {
                    let tr = document.createElement("tr");
                    let c1 = document.createElement("td");
                    let c2 = document.createElement("td");
                    let c3 = document.createElement("td");
                    let c4 = document.createElement("td");
    
                    c1.innerHTML = ++count;
                    c2.innerHTML = objArr[i]._id;
                    c3.innerHTML = objArr[i].table3;
                    c4.innerHTML = '<h3 style="text-decoration: underline; cursor: pointer;" id="view-detail">Xem thông tin chi tiết</h3>';
    
                    tr.appendChild(c1);
                    tr.appendChild(c2);
                    tr.appendChild(c3);
                    tr.appendChild(c4);
    
                    document.querySelector("#table3 tbody").appendChild(tr);
                }
            }
        }
    })
}