function doimucgia(){
    var arrGia = document.getElementsByName("gia");
    var obj = document.getElementById("mucgia");
    mucdangchon = obj.value;
    for(i=0; i<arrGia.length;i++){
        gia = parseFloat(arrGia[i].innerText);
       if(gia<mucdangchon || mucdangchon==-1){
        arrGia[i].parentNode.style.display="";
       }
       else{
        arrGia[i].parentNode.style.display="none";
        }
    }
    tongtien();
}
function tich1checkbox(i){
    var arrSL = document.getElementsByName("soluong");
    arrSL[i].disabled = !arrSL[i].disabled;  
    if (arrSL[i].disabled==true){
        arrSL[i].value=0;
        arrSL[i].parentNode.nextElementSibling.innerText="";
    }
    tongtien();
}
function thanhtien(obj){
    var soluong = obj.value;
    var gia = obj.parentNode.previousElementSibling.innerText;
    obj.parentNode.nextElementSibling.innerText= soluong*gia;
    tongtien();
}
function tongtien(){
    tt=0;
    var arrThanhTien = document.getElementsByName("thanhtien");
    for(i=0; i<arrThanhTien.length;i++){
        if(arrThanhTien[i].parentNode.style.display==""){
            tien = arrThanhTien[i].innerText;
        tt+=Number(tien);
        }
    }
    document.getElementById("tinhtong").innerText=tt;
}