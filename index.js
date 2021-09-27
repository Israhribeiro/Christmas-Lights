var luzes = document.getElementsByClassName("light")
var form = document.getElementById("form")
function on(){
    for (let i = 0; i < luzes.length; i++) {
        luzes[i].classList.remove("disable");
    }
}


const changeSpeed = function(){
    var speed = document.getElementById("speed").value;
    for (let i = 0; i < luzes.length; i++) {
        luzes[i].style.animationDuration = speed + "s";
        if(luzes[i].classList.contains("delay")){
            luzes[i].style.animationDelay = speed/2 + "s"
        }
    }
}

document.getElementById("speedBtn").addEventListener("click",changeSpeed);

function off(){
    for (let i = 0; i < luzes.length; i++) {
        luzes[i].classList.add("disable");
    }
}

form.addEventListener("keypress",function(e){
    e.preventDefault()
});