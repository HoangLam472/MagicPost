document.getElementById("list__1--title").addEventListener('click',function(){
    var table2 = document.getElementById("table2")
    table2.classList.remove("none");
    document.getElementById("add--refresh").classList.remove("none");
    document.getElementById("piechart").classList.add("none");
    document.getElementById("form__create--admin").classList.add("none");
});

document.getElementById("btn__add-admin").addEventListener('click',function(){
   
  document.getElementById("form__create--admin").classList.remove("none");
  document.getElementById("change__background-admin").classList.add("change__background--admin");
});
document.getElementById("form__close--admin").addEventListener('click',function(){
   
    document.getElementById("form__create--admin").classList.add("none");
    document.getElementById("change__background-admin").classList.remove("change__background--admin");
  });
  document.getElementById("btn-admin").addEventListener('click',function(){
   
    // document.getElementById("form__create--admin").classList.add("none");
    // document.getElementById("change__background-admin").classList.remove("change__background--admin");
    document.getElementById("dialog__create--order-admin-1").classList.remove("none");
    document.getElementById("dialog__change--backgrond-admin-1").classList.add("change__background");
  });
  document.getElementById("confirm-1").addEventListener('click',function(){
   
    document.getElementById("form__create--admin").classList.add("none");
    document.getElementById("change__background-admin").classList.remove("change__background--admin");
    document.getElementById("dialog__create--order-admin-1").classList.add("none");
    document.getElementById("dialog__change--backgrond-admin-1").classList.remove("change__background");
  });
  document.getElementById("dialog__close-admin-1").addEventListener('click',function(){
   
    // document.getElementById("form__create--admin").classList.add("none");
    // document.getElementById("change__background-admin").classList.remove("change__background--admin");
    document.getElementById("dialog__create--order-admin-1").classList.add("none");
    document.getElementById("dialog__change--backgrond-admin-1").classList.remove("change__background");
  });



  document.getElementById("icon__refresh").addEventListener('click',function(){
    location.reload();
    // document.getElementById("piechart").classList.add("none");
  });

  document.getElementById("list__2--title").addEventListener('click',function(){
    document.getElementById("piechart").classList.remove("none");
    var table2 = document.getElementById("table2")
    table2.classList.add("none");
    document.getElementById("add--refresh").classList.add("none");
  });


  google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
         
          ['Hàng gửi',      1500],
          ['Thành nhận',  3500],
          
        ]);

        var options = {
          title: 'Tổng 5000 đơn'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }