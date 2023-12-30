// document.getElementById("list__1--title").addEventListener('click',function(){
//     var list1 = document.querySelector('.list__1');
//     list1.classList.toggle("show");
// });

// document.getElementById("list__1--icon").addEventListener('click',function(){
//     var list1 = document.querySelector('.list__1');
//     list1.classList.toggle("show");
// });
document.getElementById("list__1--title").addEventListener('click',function(){
  document.getElementById("table1").classList.remove("none");
  document.getElementById("piechart-manager1").classList.add("none");
});

// document.getElementById("list__1--items-title2").addEventListener('click',function(){
//     var table2 = document.getElementById("table2");
//     table1.classList.add ("none")
//     table2.classList.remove("none");
// });
// document.getElementById("btn--add").addEventListener('click',function(){
//     var form1 = document.getElementById("form__create--user");
//     document.getElementById("change__background").classList.add("change__background");
//     form1.classList.remove("none");
// });
// document.getElementById("form__close").addEventListener('click',function(){
//     var form1 = document.getElementById("form__create--user");
//     document.getElementById("change__background").classList.remove("change__background");
//     form1.classList.add("none");
// });

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("add-user-btn");

// Get the <span> element that closes the modal
var span = document.getElementsById("form__close--manager");

// When the user clicks on the button, open the modal
// btn.onclick = function() {
//  modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//  modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
}

function SomeDeleteRowFunction(o) {
  delete_user(o.id);
   //no clue what to put here?
   var p=o.parentNode.parentNode;
       p.parentNode.removeChild(p);
  }


  document.getElementById("list__2--title").addEventListener('click',function(){
   document.getElementById("piechart-manager1").classList.remove("none");
   var table1 = document.getElementById("table1")
   table1.classList.add("none");

 });

 document.getElementById("add-nv").addEventListener('click',function(){
   document.getElementById("piechart-manager1").classList.add("none");
   var table1 = document.getElementById("table1")
   table1.classList.add("none");
   document.getElementById("form__create--manager1").classList.remove("none");
   document.getElementById("change__background-manager1").classList.add("change__background");
 });

 document.getElementById("form__close--manager1").addEventListener('click',function(){
   document.getElementById("piechart-manager1").classList.add("none");
   var table1 = document.getElementById("table1")
   table1.classList.remove("none");
   document.getElementById("form__create--manager1").classList.add("none");
   document.getElementById("change__background-manager1").classList.remove("change__background");
 });
<<<<<<< HEAD
 document.getElementById("btn-manager1").addEventListener('click',function(){
   document.getElementById("piechart-manager1").classList.add("none");
   var table1 = document.getElementById("table1")
   table1.classList.remove("none");
   document.getElementById("form__create--manager1").classList.add("none");
   document.getElementById("change__background-manager1").classList.remove("change__background");
   document.getElementById("dialog__change--backgrond-manager1-1").classList.add("change__background");
   document.getElementById("dialog__create--order-manager1-1").classList.remove("none");
 });
 document.getElementById("confirm-1").addEventListener('click',function(){
  
   document.getElementById("dialog__change--backgrond-manager1-1").classList.remove("change__background");
   document.getElementById("dialog__create--order-manager1-1").classList.add("none");
 });
 document.getElementById("dialog__close-manager1-1").addEventListener('click',function(){
  
   document.getElementById("dialog__change--backgrond-manager1-1").classList.remove("change__background");
   document.getElementById("dialog__create--order-manager1-1").classList.add("none");
 });

=======
//  document.getElementById("btn-manager1").addEventListener('click',function(){
//    document.getElementById("piechart-manager1").classList.add("none");
//    var table1 = document.getElementById("table1")
//    table1.classList.remove("none");
//    document.getElementById("form__create--manager1").classList.add("none");
//    document.getElementById("change__background-manager1").classList.remove("change__background");
//  });
>>>>>>> origin/main


 google.charts.load('current', {'packages':['corechart']});
 google.charts.setOnLoadCallback(drawChart);

function drawChart() {

 var data = google.visualization.arrayToDataTable([
   ['Task', 'Hours per Day'],
   
   ['Hàng chuyển tới',      350],
   ['Hàng chuyển đi',  250],
   
 ]);

 var options = {
   title: 'Tổng: 600 đơn'
 };

 var chart = new google.visualization.PieChart(document.getElementById('piechart-manager1'));

 chart.draw(data, options);
}

function delete_user (id) {
  const token = window.sessionStorage.getItem('token');
  const url = `http://localhost:8080/api/user/delete-user/${id}`;
  fetch(url, {
      method: 'DELETE',
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
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