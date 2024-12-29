var main = document.querySelector(".main");
var btn = document.querySelector("button");
var them = document.querySelector("#theam")

var sum =0
btn.addEventListener("click",function(){
    if(sum == 0){
    main.style.backgroundColor = "cyan"
    var theme = localStorage.getItem("main")
    var om = localStorage.setItem("main","dark")
    btn.innerText = "Dark"
    sum = 1
    }
    else{
        main.style.backgroundColor = "darkBlue"
    var theme = localStorage.getItem("main")
    var om = localStorage.setItem("main","bright")
    btn.innerText = "Bright"
    sum = 0
    }
})

