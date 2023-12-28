document.getElementById("list__1--title").addEventListener('click',function(){
    var list1 = document.querySelector('.list__1');
    list1.classList.toggle("show");
});

document.getElementById("list__1--icon").addEventListener('click',function(){
    var list1 = document.querySelector('.list__1');
    list1.classList.toggle("show");
});
document.getElementById("list__1--items-title1").addEventListener('click',function(){
    var table1 = document.getElementById("table1");
    table2.classList.add ("none");
    table1.classList.remove("none");
});

document.getElementById("list__1--items-title2").addEventListener('click',function(){
    var table2 = document.getElementById("table2");
    table1.classList.add ("none")
    table2.classList.remove("none");
});

function SomeDeleteRowFunction(o) {
    //no clue what to put here?
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
   }

