//calculator.js
window.addEventListener("load",function(){
let numToAdd;
let operation;
let numToMultiply;
let numToSub;
let counter=0;
let prevValue;
let numToDivide;
let keyElements = document.querySelectorAll(".num");

for(let i=0; i<keyElements.length;i++){
let x=keyElements[i].textContent;



document.getElementById("num"+i).addEventListener("click", function(){

	let len=displayWind.textContent.length
console.log(len)
	if(len<12){
	displayWind.textContent+=x;
}

console.log('value of string  '+displayWind.textContent  +"length  "+len );
});
}
//Addition Event:
btnPlus.addEventListener("click", function(){
operation="plus"
let str=displayWind.textContent;
console.log("value of str "+str)

if(counter===0){ 
	numToAdd=parseFloat(str);

	prevValue=numToAdd

	console.log('prevValue '+prevValue)
}
if(counter>=1 && prevValue===numToAdd){
numToAdd=numToAdd+parseFloat(str)
prevValue=numToAdd;
console.log('numToAdd value '+prevValue)
} 
if(counter>=1 && prevValue==numToSub){
numToSub=numToSub-parseFloat(str)
prevValue=numToSub;
}
if(counter>=1 && prevValue===numToDivide){
numToDivide=numToDivide/parseFloat(str)
prevValue=numToDivide;
}
if(counter>=1 && prevValue===numToMultiply){
numToMultiply=numToMultiply*parseFloat(str)
prevValue=numToMultiply;
} 
displayWind.textContent="";
counter++;
});
//subtract Event
btnSubtract.addEventListener("click", function(){
console.log('SubtractCounter value '+counter)
operation="minus"
	let str=displayWind.textContent;
 if(counter==0){ 
	numToSub=parseFloat(str)
prevValue=numToSub;
	console.log('num To Sub Value '+prevValue)
 }
if(counter>=1 && prevValue===numToSub){
numToSub=numToSub-parseFloat(str)
prevValue=numToSub;
}
 
 if(counter>=1 && prevValue===numToAdd){
numToAdd=numToAdd+parseFloat(str)
prevValue=numToAdd;
console.log('numToAdd value '+prevValue)
} 

if(counter>=1 && prevValue===numToDivide){
numToDivide=numToDivide/parseFloat(str)
prevValue=numToDivide;
}
if(counter>=1 && prevValue==numToMultiply){
numToMultiply=numToMultiply*parseFloat(str)
prevValue=numToMultiply;
} 
 

displayWind.textContent="";
	 counter++;
});
//Multiply Event
btnMultiply.addEventListener("click", function(){
operation="multiply";
 str=displayWind.textContent;
if(counter==0){ 
numToMultiply=parseFloat(str);
prevValue=numToMultiply;
 }
if(counter>=1 && prevValue==numToAdd){
numToAdd=numToAdd+parseFloat(str)
prevValue=numToAdd;
console.log('numToAdd value '+prevValue)
} 
if(counter>=1 && prevValue==numToSub){
numToSub=numToSub-parseFloat(str)
prevValue=numToSub;
}
if(counter>=1 && prevValue==numToDivide){
numToDivide=numToDivide/parseFloat(str)
prevValue=numToDivide;
}
if(counter>=1 && prevValue==numToMultiply){
numToMultiply=numToMultiply*parseFloat(str)
prevValue=numToMultiply;
} 
displayWind.textContent="";

	 counter++;
});
//Division Event
btnDivision.addEventListener("click", function(){
operation="divide";
 str=displayWind.textContent;
if(counter==0){
numToDivide=parseFloat(str);
prevValue=numToDivide;
}
if(counter>=1 && prevValue==numToAdd){
numToAdd=numToAdd+parseFloat(str)
prevValue=numToAdd;
console.log('numToAdd value '+prevValue)
} 
if(counter>=1 && prevValue==numToSub){
numToSub=numToSub-parseFloat(str)
prevValue=numToSub;
}
if(counter>=1 && prevValue==numToDivide){
numToDivide=numToDivide/parseFloat(str)
prevValue=numToDivide;
}
if(counter>=1 && prevValue==numToMultiply){
numToMultiply=numToMultiply*parseFloat(str)
prevValue=numToMultiply;
} 

displayWind.textContent="";
	 counter++;

});

//Answer Event
btnAnswer.addEventListener("click", function(){

	let secondStr=displayWind.textContent;
let secondNum=parseFloat(secondStr);
	console.log("second Number "+secondNum);
displayWind.textContent="";
if(operation==="plus"){
let sum=addFunction(prevValue, secondNum);
let roundedSum=Math.round(sum * 100) / 100;
console.log("Sum  "+roundedSum)
displayWind.textContent=roundedSum;
}
if(operation==="minus"){
let subtraction=subtractFunction(prevValue,secondNum);
let roundedSub=Math.round(subtraction * 100) / 100;
displayWind.textContent=roundedSub;
}
if(operation==="multiply"){
	let callMutiply=multipFunction(prevValue,secondNum);
let roundedMultiply=Math.round(callMutiply * 100) / 100;
	displayWind.textContent=roundedMultiply;
}
if(operation==="divide"){
	let callDivide=divideFunction(prevValue,secondNum);
	let roundedDivide=Math.round(callDivide * 100) / 100;
displayWind.textContent=roundedDivide;
}


});
btnClear.addEventListener("click" ,function(){
       
	displayWind.textContent='';

			});

btnAllClear.addEventListener("click" ,function(){
	counter=0
	prevValue=""
	secondNum=""
	roundedSum=""
	roundedSub=""
	roundedDivide=""
	roundedMultiply=""

	console.log("prevValue  "+prevValue)
	displayWind.textContent='';


	
	
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
