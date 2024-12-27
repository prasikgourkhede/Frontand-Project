var arr=[
    {
        name:"Ravi",
        age:19,
        city:"patna"
    },
    {
        name:"ved",
        age:18,
        city:"bhopal"
    },
    {
        name:"vivek",
        age:27,
        city:"Gaya"
    },
    {
        name:"nishant",
        age:24,
        city:"nagpur"
    }
]
var sum=" "
arr.forEach(function(elem){
    sum += 
    `<div class="card">
    <h1>${elem.name}</h1>
    <h4>${elem.age}, ${elem.city}</h4>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores voluptatibus qui et, omnis magnam hic possimus ex tenetur, veritatis voluptatum fugiat tempora cum fuga molestiae.</p>
    </div>`;
    
})

var body=document.querySelector('body')
body.innerHTML=sum
// arr.forEach(function(elem){
//     console.log(elem.name+" "+elem.age+" "+elem.city)
// })