var btn=document.querySelector(".btn")
var h1=document.querySelector('h1')

btn.addEventListener('click',()=>{
    h1.innerHTML='Request Sending.....'
    h1.style.color='pink'
    btn.style.marginLeft='100px';
    setTimeout(function(){
        h1.innerHTML='Friends'
        h1.style.color='green'
        btn.style.marginLeft='0px';
    },3000)
})