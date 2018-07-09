//newCal.js
window.addEventListener("load",function(){
let keyElements = document.querySelectorAll(".num");
let numToAdd;
let operation;
let numToMultiply=1;
let numToSub;
let counter=0;
for(var i=0; i<keyElements.length;i++){
let x=keyElements[i].textContent;


document.getElementById("num"+i).addEventListener("click", function(){
displayWind.textContent+=x;
console.log('value of x  '+x );
});
}
//Addition Event:
btnPlus.addEventListener("click", function(){
operation="plus"
	let str=displayWind.textContent;
if(counter==0){ 
	numToAdd=parseInt(str)
 }else

 numToAdd=numToAdd+parseInt(str)
	console.log('firstNum '+ numToAdd)
displayWind.textContent="";
counter++;
console.log('plusCounter value '+counter)
});
//subtract Event
btnSubtract.addEventListener("click", function(){
console.log('SubtractCounter value '+counter)
operation="minus"
	let str=displayWind.textContent;
 if(counter==0){ 
	numToSub=parseInt(str)
 }
/*
 if(counter>=1 && operation==="plus"){
numToSub=numToAdd+parseInt(str)
} 
*/
if(counter>=1){
 numToSub=numToSub-parseInt(str)
	console.log('numToSub Value '+ numToSub)
}
	displayWind.textContent="";
counter++;

});
//Multiply Event
btnMultiply.addEventListener("click", function(){
operation="multiply";
let str=displayWind.textContent;
numToMultiply*=parseInt(str);
displayWind.textContent="";
});
//Division Event
btnDivision.addEventListener("click", function(){
operation="divide";
let str=displayWind.textContent;
if(counter==0){
numToDivide=parseInt(str);
console.log('value of numToDivide  '+numToDivide);
}else
numToDivide=numToDivide/parseInt(str);
console.log('value of numToDivide  '+numToDivide);
displayWind.textContent="";
counter++;
});
//Answer Event
btnAnswer.addEventListener("click", function(){

	let secondStr=displayWind.textContent;
	let secondNum=parseInt(secondStr);
console.log("second Number "+secondNum);
displayWind.textContent="";
if(operation==="plus"){
let sum=addFunction(numToAdd, secondNum);
displayWind.textContent=sum;
}
if(operation==="minus"){
let subtraction=subtractFunction(numToSub,secondNum);
displayWind.textContent=subtraction;
}
if(operation==="multiply"){
	let callMutiply=multipFunction(numToMultiply,secondNum);
	displayWind.textContent=callMutiply;
}
if(operation==="divide"){
	let callDivide=divideFunction(numToDivide,secondNum);
	displayWind.textContent=callDivide;
}


});
btnClear.addEventListener("click" ,function(){
			displayWind.textContent=" ";
			});
});
function addFunction(n1,n2){
	return n1+n2;
	}
function subtractFunction(n1,n2){
	return n1-n2;

}
function multipFunction(n1,n2){
	return n1*n2;
}
function divideFunction(n1,n2){
	return n1/n2;
}
