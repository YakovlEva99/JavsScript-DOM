var buttonDom = document.querySelector("button");
var isBackgroundAppliend = false;
buttonDom.addEventListener("click",function(){
    if(isBackgroundAppliend === false){
    document.querySelector("body").style.background = "blue";
    isBackgroundAppliend = true;
    } else {document.querySelector("body").style.background = "white";
    isBackgroundAppliend = false;
}
});

var buttonDom = document.querySelector("button");
buttonDom.addEventListener("click",function(){
    document.querySelector("body").classList.toggle("changeColor");
    });

