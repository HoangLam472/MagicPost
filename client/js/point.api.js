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