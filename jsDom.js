// newFunction();

// function newFunction() {
//     var buttonDom = document.querySelector("button");
//     var isBackgroundAppliend = false;
//     buttonDom.addEventListener("click", function () {
//         if (isBackgroundAppliend === false) {
//             document.querySelector("body").style.background = "blue";
//             isBackgroundAppliend = true;
//         } else {
//             document.querySelector("body").style.background = "white";
//             isBackgroundAppliend = false;
//         }
//     });

//     var buttonDom = document.querySelector("button");
//     buttonDom.addEventListener("click", function () {
//         document.querySelector("body").classList.toggle("changeColor");
//     });
// }

// время при загрузке веб

let startTime = new Date().getTime();

let figure2 = function(){
    let shape = document.querySelector(".image1");
    let top = Math.random() * 400;
    let left = Math.random() * 700;
    let width =  Math.random() * 200 + 50; 
    shape.style.display = "none";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = width + "px";

    if(Math.random() < 0.3){
        shape.style.borderRadius = "50%";
        shape.style.backgrounColor = "transparent";

    } else if (Math.random() >= 0.3 && Math.random() < 0.7){
        shape.style.borderRadius = "0";
        shape.style.backgrounColor = "transparent";
    }else if(Math.random() >= 0.7){
        shape.style.borderRadius = "0";
        shape.style.left = "0";
        shape.style.width = "0";
        shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "100px solid red";
        shape.style.backgroundColor = "transparent";
    }

    shape.style.display="block"; 
    clearTimeout(startTime);
    startTime = new Date().getTime();
}

figure2();

document.querySelector(".image1").onclick = function() {
    this.style.display= "none";
    let finishTime = new Date().getTime();
    let reactionTime = (finishTime - startTime)/1000; 
    document.getElementById("interval").innerHTML = reactionTime;
    setTimeout(figure2, Math.random() * 3000);
    
    
   
};

