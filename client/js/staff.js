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