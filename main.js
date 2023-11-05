var img_l = document.getElementById("image-left")
var img_r = document.getElementById("image-right")

refresh()

function refresh(){ 
    img_row = Math.floor(Math.random() * 4)+1;
    img_col = Math.floor(Math.random() * 3)+1;
    
    src_obj = "plate14/plate14_" + img_row +"_" +img_col+"_obj.png"
    src_fft = "plate14/plate14_" + img_row +"_" +img_col+"_fft.png"
    
    img_l.src = src_obj;
    img_r.src = src_fft;
}