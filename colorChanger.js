

var button = document.querySelector("button");

// var backgColor = false;

/********************************************************
 * 
 * WE DONT NEED TO INITIALIZE/SELECT BODY SEPARATELY IF WE USE DOCUMENT.BODY. ...

//var body = document.querySelector("body");
//var body = document.getElementsByTagName("body")[0];

********************************************************/

// button.addEventListener("click", function(){

//     if (backgColor == true){
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }    
//     backgColor = !backgColor;
// })

button.addEventListener("click", function (){

    document.body.classList.toggle("purple");

});