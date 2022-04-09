// var name=window.prompt("xin chào! Bạn tên gì?","");
// document.write("Hello Everyoone! chào mừng "+name+" đến với shop hoàng đen");
// Kiểm tra đăng nhập
function KiemTraThongTin(){

    var hoten=document.getElementById("hoten");
    
    if (hoten.value==""){
        alert("Vui lòng nhập Họ tên.");
        hoten.focus();
        return false;
    }

    var nam=document.getElementById("nam");

    if(nam.value==""){
        alert("Hãy điền Năm sinh.");
        nam.focus();
        return false;
    }
    if(isNaN(nam.value)==true){
        alert("Năm sinh phải là số.");
        nam.value="";
        nam.focus();
        return false;
    }

    var email=window.document.dangky.txtEmail;
    re=/\w+@\w+\.\w+/;
    if (email.value==""){
        alert("Bạn chưa nhập Email.")
        email.focus();
        return false;
    }
    else
        if(re.test(email.value)==false){
            alert("Email không đúng định dạng!");
            email.focus();
            return false;
        }
    // Thông báo khi thông tin hượp lệ
    alert("Đăng ký thành công! Xin chúc mừng.");
    return true;
}