document.getElementById("list__1--title").addEventListener('click',function(){
    var list1 = document.querySelector('.list__1');
    list1.classList.toggle("show");
});

document.getElementById("list__1--icon").addEventListener('click',function(){
    var list1 = document.querySelector('.list__1');
    list1.classList.toggle("show");
});
document.getElementById("list__1--items-title1").addEventListener('click',function(){
    var list1__1 = document.querySelector(".list__1--1");
    list1__1.classList.toggle("show");
});
document.getElementById("list__1--items-icon1").addEventListener('click',function(){
    var list1__1 = document.querySelector(".list__1--1");
    list1__1.classList.toggle("show");
});
document.getElementById("list__1--items-title2").addEventListener('click',function(){
    var list1__2 = document.querySelector(".list__1--2");
    list1__2.classList.toggle("show");
});
document.getElementById("list__1--items-icon2").addEventListener('click',function(){
    var list1__2 = document.querySelector(".list__1--2");
    list1__2.classList.toggle("show");
});

document.getElementById("list__1--1-items1").addEventListener('click',function(){
    var table1 = document.getElementById("table1");
    table1.classList.remove("none");
});