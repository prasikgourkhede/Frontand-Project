const arr = [
    {
        username: "emma_watson",
        userDp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImage: "https://images.unsplash.com/photo-1519537403664-801308b45f79?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    },
    {
        username: "travel_mike",
        userDp: "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImage: "https://images.unsplash.com/photo-1584865288642-42078afe6942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    },
    {
        username: "foodie_sarah",
        userDp: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImage: "https://images.unsplash.com/photo-1535725525385-bc19d13c503c?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    },
    {
        username: "tech_david",
        userDp: "https://images.unsplash.com/photo-1554412933-514a83d2f3c8?q=80&w=1944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImage: "https://images.unsplash.com/photo-1520367445093-50dc08a59d9d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    },
    {
        username: "fitness_alex",
        userDp: "https://images.unsplash.com/photo-1554412302-79e9cd05a284?q=80&w=1912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImage: "https://images.unsplash.com/photo-1529271247619-1f9736e6e8ee?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    },
    {
        username: "artist_lisa",
        userDp: "https://images.unsplash.com/photo-1578901787297-6ee2f54334fd?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImage: "https://plus.unsplash.com/premium_photo-1673734624749-0757699397a3?q=80&w=1960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    },
    {
        username: "pet_lover_sam",
        userDp: "https://images.unsplash.com/photo-1519537403664-801308b45f79?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storyImage: "https://images.unsplash.com/photo-1440504738219-a74a11143d50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        
    }
];
var sum = ""
arr.forEach(function(elem,idx){
    
    sum += `<div id="story">
                <img id= "${idx}" src="${elem.userDp}" alt="">
            </div>`
})

var storiyan = document.querySelector("#storiyan")
storiyan.innerHTML = sum

var growth = document.querySelector(".growth")
var full = document.querySelector("#full")
var user = document.querySelector("#full h2")
storiyan.addEventListener("click",function(dets){
    grow =  0
   var gap = arr[dets.target.id],story
    
   setInterval(function(){
    grow++
    growth.style.width = grow+"%"
   },30)

    user.innerHTML = gap.username
    full.style.display = "block"
    full.style.backgroundImage = `url(${gap.storyImage})`

    setTimeout(function(){
        full.style.display = "none"
    },3000)
})