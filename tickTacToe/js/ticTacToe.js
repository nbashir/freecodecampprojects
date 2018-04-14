
window.addEventListener("load",function(){
let x;	 

let keyElements = document.querySelectorAll(".spanBoxClass")
console.log(keyElements)
for(let i=0; i<keyElements.length;i++){
let x=keyElements[i].textContent;
console.log("value of x "+ x)

	document.getElementById("box"+i).addEventListener("click" ,function(){
console.log("box"+i)

y=findRandomNum(0,1);
   if(y===1){
document.getElementById("box"+i).textContent="x";

}else
	document.getElementById("box"+i).textContent="o"
if(document.getElementById("box0").textContent==="x" && document.getElementById("box1").textContent==="x" && document.getElementById("box2").textContent==="x" ){
displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}
	
if(document.getElementById("box3").textContent==="x" && document.getElementById("box4").textContent==="x" && document.getElementById("box5").textContent==="x" ){
displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}
if(document.getElementById("box6").textContent==="x" && document.getElementById("box7").textContent==="x" && document.getElementById("box8").textContent==="x" ){
displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}	

if(document.getElementById("box0").textContent==="x" && document.getElementById("box3").textContent==="x" && document.getElementById("box6").textContent==="x"){
displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}
if(document.getElementById("box1").textContent==="x" && document.getElementById("box4").textContent==="x" && document.getElementById("box7").textContent==="x"){
	displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}
if(document.getElementById("box0").textContent==="o" && document.getElementById("box1").textContent==="x" && document.getElementById("box2").textContent==="x" ){
displayMessage.textContent="You lost. Try Again";
}

});



}

function findRandomNum(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
});

