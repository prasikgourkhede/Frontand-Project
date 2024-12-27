var img=document.querySelector("img");
var moveX=0;
var moveY=0;
document.addEventListener("keydown",(dets)=>{
if(dets.code=='ArrowRight' && moveX<94){
    moveX++;
    img.style.left=moveX+'%';
}else if(dets.code=='ArrowLeft' &&  moveX>0){
        moveX--;
        img.style.left=moveX+'%';
}else if(dets.code=='ArrowDown' && moveY<=100){
        moveY++;
        img.style.top=moveY+'%';
}else if(dets.code=='ArrowUp' && moveY>=0){
    moveY--;
    img.style.top=moveY+'%';
   
}
})