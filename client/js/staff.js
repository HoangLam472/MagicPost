document.getElementById("list__1--title").addEventListener('click',function(){
    var list1 = document.querySelector('.list__1');
    list1.classList.toggle("show");
});

document.getElementById("list__1--icon").addEventListener('click',function(){
    var list1 = document.querySelector('.list__1');
    list1.classList.toggle("show");
});
// document.getElementById("list__1--items-title1").addEventListener('click',function(){
//     var list1__1 = document.querySelector(".list__1--1");
//     list1__1.classList.toggle("show");
// });
// document.getElementById("list__1--items-icon1").addEventListener('click',function(){
//     var list1__1 = document.querySelector(".list__1--1");
//     list1__1.classList.toggle("show");
// });
// document.getElementById("list__1--items-title2").addEventListener('click',function(){
//     var list1__2 = document.querySelector(".list__1--2");
//     list1__2.classList.toggle("show");
// });
// document.getElementById("list__1--items-icon2").addEventListener('click',function(){
//     var list1__2 = document.querySelector(".list__1--2");
//     list1__2.classList.toggle("show");
// });

// document.getElementById("list__1--items-title1").addEventListener('click',function(){
//     var form1 = document.getElementById("staff__form");
//     form1.classList.add("none");
// });
function showForm() {
    var form = document.getElementById("staff__form");
    form.classList.remove("none");
    var detail__form = document.getElementById("form__detail").classList.add("none");
    var table3 = document.getElementById("table3").classList.add("none");
  }

  function printForm() {
    // var form = document.getElementById("staff__form").outerHTML;
    // var printWindow = window.open('', '', 'width=800,height=600');
    // printWindow.document.write('<html><head><title>In bưu gửi</title></head><body>');
    // printWindow.document.write(form);
    // printWindow.document.write('</body></html>');
    // printWindow.document.close();
    // printWindow.print();
    print();
  }
  document.getElementById("list__1--items-title1").addEventListener('click',function(){
    var form = document.getElementById("staff__form");
    form.classList.add("none");
    var form1 = document.getElementById("form__create--oder");
    document.getElementById("change__background").classList.add("change__background");
    form1.classList.remove("none");
    var table1 = document.getElementById("table1");
    table1.classList.add("none");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3").classList.add("none");
    table2.classList.add("none");
    var detail__form = document.getElementById("form__detail").classList.add("none");
});
document.getElementById("form__close").addEventListener('click',function(){
  
    var form1 = document.getElementById("form__create--oder");
    document.getElementById("change__background").classList.remove("change__background");
    form1.classList.add("none");
    var detail__form = document.getElementById("form__detail").classList.add("none");
    
});
document.getElementById("list__1--items-title3").addEventListener('click',function(){
  var form = document.getElementById("staff__form");
  form.classList.add("none");
  var table1 = document.getElementById("table1");

  table1.classList.remove("none");
  var table2 = document.getElementById("table2");

  table2.classList.add("none");
  var table3 = document.getElementById("table3").classList.add("none");
  var detail__form = document.getElementById("form__detail").classList.add("none");

});
document.getElementById("list__1--items-title4").addEventListener('click',function(){
  var form = document.getElementById("staff__form");
  form.classList.add("none");
  var table1 = document.getElementById("table1");
  table1.classList.add("none");
  var table2 = document.getElementById("table2");

  table2.classList.remove("none");
  var table3 = document.getElementById("table3").classList.add("none");
  var detail__form = document.getElementById("form__detail").classList.add("none");
});
document.getElementById("list__1--items-title2").addEventListener('click',function(){
  var form = document.getElementById("staff__form");
  form.classList.add("none");
  var table1 = document.getElementById("table1");
  table1.classList.add("none");
  var table2 = document.getElementById("table2");

  table2.classList.add("none");
  var table3 = document.getElementById("table3").classList.remove("none");
  var detail__form = document.getElementById("form__detail").classList.add("none");

})
document.getElementById("view-detail").addEventListener('click',function(){
  var form = document.getElementById("staff__form");
  form.classList.add("none");
  var table1 = document.getElementById("table1");
  table1.classList.add("none");
  var table2 = document.getElementById("table2");

  table2.classList.add("none");
  var detail__form = document.getElementById("form__detail").classList.remove("none");
  document.getElementById("change__background--detail").classList.add("change__background");
})
document.getElementById("form__close--detail").addEventListener('click',function(){
  var form = document.getElementById("staff__form");
  form.classList.add("none");
  var table1 = document.getElementById("table1");
  table1.classList.add("none");
  var table2 = document.getElementById("table2");

  table2.classList.add("none");
  var detail__form = document.getElementById("form__detail").classList.add("none");
  document.getElementById("change__background--detail").classList.remove("change__background");
})
document.getElementById("create-order-detail").addEventListener('click',function(){
  var form = document.getElementById("staff__form");
  form.classList.add("none");
  var table1 = document.getElementById("table1");
  table1.classList.add("none");
  var table2 = document.getElementById("table2");

  table2.classList.add("none");

  var detail__form = document.getElementById("form__detail").classList.add("none");
  document.getElementById("change__background--detail").classList.remove("change__background");
  var table3 = document.getElementById("table3").classList.remove("none");
})