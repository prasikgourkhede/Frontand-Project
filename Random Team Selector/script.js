let teams = ['CSK','MI','KKR','GT','SRH','RR','LSG','PBKS','DC','RCB'];

let  btn = document.querySelector('button');
let h1= document.querySelector('h1');


btn.addEventListener('click',()=>{
    let num=Math.floor(Math.random()*teams.length);
    h1.innerHTML=teams[num]
    
})