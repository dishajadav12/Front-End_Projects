
var allbutton = document.querySelectorAll(".drum").length;
for(var i=0;i < allbutton ;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",innerValue)
    function innerValue(){

       var buttonInnerHtml= this.innerHTML;
       makeSound(buttonInnerHtml);
       makeAnimation(buttonInnerHtml);}
}

document.addEventListener("keypress", function(e){
        makeSound(e.key);
        makeAnimation(e.key);
})
function makeSound(key)
{
        switch(key)
        {
            case "w":
                var audio1= new Audio("sounds/tom-1.mp3");
                audio1.play();
            break;
            case "a":
                var audio1= new Audio("sounds/tom-2.mp3");
                audio1.play();
            break;
            case "s":
                var audio1= new Audio("sounds/tom-3.mp3");
                audio1.play();
            break;
            case "d":
                var audio1= new Audio("sounds/tom-4.mp3");
                audio1.play();
            break;
            case "j":
                var audio1= new Audio("sounds/crash.mp3");
                audio1.play();
            break;
            case "k":
                var audio1= new Audio("sounds/kick-bass.mp3");
                audio1.play();
            break;
            case "l":
                var audio1= new Audio("sounds/snare.mp3");
                audio1.play();
            break;
        }



}

function makeAnimation(currentKey){
    var addAnimation= document.querySelector("."+ currentKey);
    addAnimation.classList.add("pressed");

    setTimeout(function(){
        addAnimation.classList.remove("pressed");
    },100);

}

