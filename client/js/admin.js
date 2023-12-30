document.getElementById("list__1--title").addEventListener('click',function(){
    var table2 = document.getElementById("table2")
    table2.classList.remove("none");
    document.getElementById("add--refresh").classList.remove("none");
    document.getElementById("page-2").classList.add("none");
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
    document.getElementById("page-2").classList.remove("none");
    var table2 = document.getElementById("table2")
    table2.classList.add("none");
    document.getElementById("add--refresh").classList.add("none");
  });

  var dataArray = [
    ['Task', 'Hours per Day'],
    ['Hàng gửi',      1500],
    ['Thành nhận',  3500],
  ];

  var options = {
    title: 'Tổng 5000 đơn'
  };

  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    
    var data = google.visualization.arrayToDataTable(dataArray);

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }

let buildChart = document.getElementById('select-2').addEventListener('change', (e) => {
  e.preventDefault();
  if (e.srcElement.value === 'k2') {
    dataArray = [
      ['Task', 'Hours per Day'],
      ['Hàng hoàn về',      21],
      ['Hàng chuyển tới',   180],
      ['Hàng chuyển đi',  200],
    ];
    options.title = 'Tổng: 401 đơn'
    drawChart();
  } else if (e.srcElement.value === 'k1') {
    dataArray = [
      ['Task', 'Hours per Day'],
      ['Hàng gửi',      1500],
      ['Thành nhận',  3500],
    ];
    options.title = 'Tổng: 5000 đơn'
    drawChart();
  } else if (e.srcElement.value === 'k3') {
    dataArray = [
      ['Task', 'Hours per Day'],
      ['Hàng hoàn về',      52],
      ['Hàng chuyển tới',   260],
      ['Hàng chuyển đi',  500],
    ];
    options.title = 'Tổng: 812 đơn'
    drawChart();
  } else if (e.srcElement.value === 'k4') {
    dataArray = [
      ['Task', 'Hours per Day'],
      ['Hàng hoàn về',      112],
      ['Hàng chuyển tới',   650],
      ['Hàng chuyển đi',  302],
    ];
    options.title = 'Tổng: 1064 đơn'
    drawChart();
  }
  else if (e.srcElement.value === 'k5') {
    dataArray = [
      ['Task', 'Hours per Day'],
      ['Hoàn về',      30],
      ['Đang giao',   200],
      ['Thành công',  380],
    ];
    options.title = 'Tổng: 610 đơn'
    drawChart();
  }
  else if (e.srcElement.value === 'k6') {
    dataArray = [
      ['Task', 'Hours per Day'],
      ['Hoàn về',      69],
      ['Đang giao',   520],
      ['Thành công',  402],
    ];
    options.title = 'Tổng: 991 đơn'
    drawChart();
  }
  else if (e.srcElement.value === 'k7') {
    dataArray = [
      ['Task', 'Hours per Day'],
      ['Hoàn về',      96],
      ['Đang giao',   396],
      ['Thành công',  696],
    ];
    options.title = 'Tổng: 1188 đơn'
    drawChart();
  }
})