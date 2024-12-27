var btn = document.querySelector("button")
var bulb = document.querySelector(".bulb")


sum = 0
btn.addEventListener("click",function(){
    if(sum == 0){
        bulb.style.backgroundColor = "yellow"
        btn.innerText = "ON"
        sum = 1
    }
    else{
        bulb.style.backgroundColor = "transparent"
        btn.innerText = "OFF"
        sum = 0
    }
})