var btns = document.querySelectorAll("button")
var body = document.querySelector('body')

btns.forEach(function(dets){
    dets.addEventListener('click',function(){
        console.log(dets.innerHTML);
        body.style.backgroundColor = dets.innerHTML
    })
})