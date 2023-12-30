import {config} from '../config.js'

const toke = window.sessionStorage.getItem('token');

let update = document.querySelector('#list__1--items-title2').addEventListener('click', (e) => {
    e.preventDefault();
    get_all_order();
})

function get_all_order () {
    const url = `${config.API_URL}/api/order`;
    fetch(url, {
        method: 'GET',
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${toke}`
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
                if (true ) {
                    const id = objArr[i]._id;
                    let tr = document.createElement("tr");
                    let c1 = document.createElement("td");
                    let c2 = document.createElement("td");
                    let c3 = document.createElement("td");
                    let c4 = document.createElement("td");
                    let c5 = document.createElement("td");
                    
                    c1.innerHTML = ++count;
                    c2.innerHTML = objArr[i]._id;
                    c3.innerHTML = objArr[i].senderName;
                    c4.innerHTML = objArr[i].recipientName;

                    c5.innerHTML = '<td><h3 style="text-decoration: underline; cursor: pointer" id="view-detail">Xem thông tin chi tiết</h3></td>'
                    // c5.firstChild.setAttribute('id', id);

                    tr.appendChild(c1);
                    tr.appendChild(c2);
                    tr.appendChild(c3);
                    tr.appendChild(c4);
                    tr.appendChild(c5);
    
                    document.querySelector("#table3 tbody").appendChild(tr);
                }
            }
        }
    })
}