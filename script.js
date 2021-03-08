let circle = document.getElementsByClassName('circle');
let on =document.querySelector("#play");
let off =document.querySelector("#stop");
on.addEventListener("click",function(){

})
off.addEventListener("click",function(){
    for(var i=0;i<circle.length;i++){     
        circle[i].style.animation = "none";    
    }
})
on.addEventListener("click",function(){
    for(var i=0;i<circle.length;i++){
        circle[i].removeAttribute("style");
        circle[i].style.animationPlayState = "running";
    }        
})