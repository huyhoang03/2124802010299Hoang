$('.add-to-cart').click(function() {
    var cart = $('.shopping_bg');
    var imgtofly = $(this).parents('li.cart_items').find('a.product-image img').eq(0);
     if (imgtofly) {
         var imgclone = imgtofly.clone()
             .offset({ top:imgtofly.offset().top, left:imgtofly.offset().left })
             .css({'opacity':'0.7', 'position':'absolute', 'height':'150px', 'awidth':'150px', 'z-index':'1000'})
             .appendTo($('body'))
             .animate({
                 'top':cart.offset().top + 10,
                 'left':cart.offset().left + 30,
                 'awidth':55,
                 'height':55
             }, 1000, 'easeInElastic');
         imgclone.animate({'awidth':0, 'height':0}, function(){ $(this).detach() });
     }
     return false;
 });
var img = [];
for(let i=0; i<img.length; i++){
    img[i] = new Image();
    img[i].src = "img/" + i+ ".jpg";
}
var index =0;
function first(){
    index = 0;
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
    alert("Hiển thị ảnh đầu tiên")
}
function last(){
    index = img.length -1;
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
    alert("Hiển thị hình cuối")
}
function next(){
    index++;
    if(index >= img.length){
        index=0;
    }
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
    alert("Hình kế tiếp")
}
function prev(){
    index--;
    if(index < 0){
        index = img.length-1;
    }
    var anh = document.getElementById("anh");
    anh.src = img[index].src;
    alert("hàm hiển thị hình trước")
}