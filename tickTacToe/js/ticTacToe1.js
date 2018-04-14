
window.addEventListener("load",function(){
let x;
let y;
let prevRandNum;
let newArr=[];
let counter=0
document.getElementById("twoPlayer").addEventListener("click",function(){
	document.getElementById("main").innerHTML="<h2>"+"Pick one"+"<br>"+"What you want to Pick"+"</h2>"+"<button type button class=btn>"+"X"+"</button>"+"<button type button class=btn>"+"0"+"</button>"
	});

//One play game choosing x
	document.getElementById("onePlayer").addEventListener("click",function(){
	document.getElementById("main").innerHTML="<h2>"+"Pick one"+"<br>"+"What you want to Pick"+"</h2>"+"<button type button class=btn id=xBtn>"+"X"+"</button>"+"<button type button class=btn id=oBtn>"+"0"+"</button>"

document.getElementById("xBtn").addEventListener("click",function(){
	document.getElementById("main").innerHTML="<h5>"+"One player Game"+"</h5>"+
		"<span class =spanBoxClass id=box0>"+"."+"</span>"+
		"<span class=spanBoxClass id=box1>"+"."+"</span>"+
		"<span class=spanBoxClass id=box2>"+"."+"</span>"+
		"<span class=spanBoxClass id=box3>"+"."+"</span>"+
		"<span class=spanBoxClass id=box4>"+"."+"</span>"+
		"<span class=spanBoxClass id=box5>"+"."+"</span>"+
		"<span class=spanBoxClass id=box6>"+"."+"</span>"+
		"<span class=spanBoxClass id=box7>"+"."+"</span>"+
		"<span class=spanBoxClass id=box8>"+"."+"</span>"

	let keyElements = document.querySelectorAll(".spanBoxClass")

	console.log(keyElements)
for(let i=0; i<keyElements.length;i++){
let x=keyElements[i].textContent;

document.getElementById("box"+i).addEventListener("click" ,function(){
	 
document.getElementById("box"+i).textContent="X";
counter=counter+1
	console.log("counter  "+counter)
console.log("box i"+"box"+i)
console.log("i "+i)
newArr.push(i)
console.log("new Array Value "+newArr)	
//find the random number
	y=findRandomNum(0,8)
console.log("y value "+y)	
//if value y=i then find the new random number
if(newArr.indexOf(y)!==-1 || newArr.indexOf(i)!==-1){
y=findRandomNum(0,8)
document.getElementById("box"+y).textContent="O"
counter=counter+1
}
//document.getElementById("box"+y).textContent="O"	
newArr.push(y)
console.log("new Array after y push "+newArr)

if(document.getElementById("box0").textContent==="X" && document.getElementById("box1").textContent==="X" && document.getElementById("box2").textContent==="X" ){
document.getElementById("box0").style.color = "#FFFFFF";
document.getElementById("box1").style.color = "#FFFFFF";
document.getElementById("box2").style.color = "#FFFFFF";
	displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}
	
if(document.getElementById("box3").textContent==="X" && document.getElementById("box4").textContent==="X" && document.getElementById("box5").textContent==="X" ){
document.getElementById("box3").style.color = "#FFFFFF";
document.getElementById("box4").style.color = "#FFFFFF";
document.getElementById("box5").style.color = "#FFFFFF";
	displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}
if(document.getElementById("box6").textContent==="X" && document.getElementById("box7").textContent==="X" && document.getElementById("box8").textContent==="X" ){
document.getElementById("box6").style.color = "#FFFFFF";
document.getElementById("box7").style.color = "#FFFFFF";
document.getElementById("box8").style.color = "#FFFFFF";
	displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}	

if(document.getElementById("box0").textContent==="X" && document.getElementById("box3").textContent==="X" && document.getElementById("box6").textContent==="X"){
document.getElementById("box0").style.color = "#FFFFFF";
document.getElementById("box3").style.color = "#FFFFFF";
document.getElementById("box6").style.color = "#FFFFFF";
	displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}
if(document.getElementById("box1").textContent==="X" && document.getElementById("box4").textContent==="X" && document.getElementById("box7").textContent==="X"){
document.getElementById("box1").style.color = "#FFFFFF";
document.getElementById("box4").style.color = "#FFFFFF";
document.getElementById("box7").style.color = "#FFFFFF";
	displayMessage.innerHTML="<span>"+"You Won"+"</span>"+"<br>"+"<span>"+"Tic Tac Toe Three in a row"+"</span>";
}


});
}
});
});	
function findRandomNum(ourMin, ourMax) {

  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}
});
	 





