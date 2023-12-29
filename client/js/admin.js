document.getElementById("list__1--title").addEventListener('click',function(){
    var table2 = document.getElementById("table2")
    table2.classList.remove("none");
    document.getElementById("add--refresh").classList.remove("none");
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
  
  });