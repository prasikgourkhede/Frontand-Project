var btn = document.querySelector("button")
var body = document.querySelector("body")


btn.addEventListener("click",function(){
    const rotate = Math.random() * 360;

    var img = document.createElement("img")
    img.setAttribute("src","https://imgs.search.brave.com/3-ou4CQtve76x7Bf5HGCXqGPVWl_1Lkzl_hOyuFvG3k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNC8w/NC8wMy8xMC80MC9o/b25leS0zMTEwNDdf/XzM0MC5wbmc")
    document.body.appendChild(img)
    img.style.position = "absolute"
    img.style.height = "100px"
    img.style.width = "100px"
    img.style.rotate = rotate + "deg";
    img.style.top = Math.floor(Math.random()*100) + "%"
     img.style.left = Math.floor(Math.random()*100) + "%"
})