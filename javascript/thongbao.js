var images = [];
for(let i=0; i<10; i++){
    images[i] = new Image();
    images[i].src = "images/" + i+ ".jpg";
}
var index =0;
function first(){
    index = 0;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    alert("Hiển thị ảnh đầu tiên")
}
function last(){
    index = images.length -1;
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    alert("Hiển thị hình cuối")
}
function next(){
    index++;
    if(index >= images.length){
        index=0;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    alert("Hình kế tiếp")
}
function prev(){
    index--;
    if(index < 0){
        index = images.length-1;
    }
    var anh = document.getElementById("anh");
    anh.src = images[index].src;
    alert("hàm hiển thị hình trước")
}
// TÍNH TIỀN HÀNG
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