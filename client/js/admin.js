document.getElementById("list__1--title").addEventListener('click',function(){
    var table2 = document.getElementById("table2")
    table2.classList.remove("none");
    document.getElementById("add--refresh").classList.remove("none");
    document.getElementById("piechart").classList.add("none");
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
   
    document.getElementById("form__create--admin").classList.add("none");
    document.getElementById("change__background-admin").classList.remove("change__background--admin");
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
          ['Thất bại',     50],
          ['Đang giao',      250],
          ['Thành công',  300],
          
        ]);

        var options = {
          title: 'Thống kê tình trạng giao hàng'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }