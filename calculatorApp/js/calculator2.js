//calculator.js
window.addEventListener("load",function(){
let numToAdd;
let operation;
let numToMultiply;
let numToSub;
let counter=0;
let prevValue;
let numToDivide;
let str="";
let keyElements = document.querySelectorAll(".num");

for(var i=0; i<keyElements.length;i++){
let x=keyElements[i].textContent;


document.getElementById("num"+i).addEventListener("click", function(){
displayWind.textContent+=x;
 str=displayWind.textContent;
console.log('value of x  '+x );
});
}
//Addition Event:
btnPlus.addEventListener("click", function(){
operation="plus"
//	let str=displayWind.textContent;
console.log("value of str "+str)

if(counter===0){ 
	
	numToAdd=parseFloat(str);


	console.log('numToAdd value '+prevValue)
}
if(counter>=1 && prevValue===numToAdd){
numToAdd=prevValue+parseFloat(str)
prevValue=numToAdd;
console.log('numToAdd value '+prevValue)
} 
if(counter>=1 && prevValue===numToSub){
numToSub=numToAdd-parseFloat(str)
prevValue=numToSub;
}
if(counter>=1 && prevValue===numToDivide){
numToDivide=numToAdd/parseFloat(str)
prevValue=numToDivide;
}
if(counter>=1 && prevValue===numToMultiply){
numToMultiply=numToAdd*parseFloat(str)
prevValue=numToMultiply;
} 
displayWind.textContent="";


	prevValue=numToAdd

counter++;
});
//subtract Event
btnSubtract.addEventListener("click", function(){
console.log('SubtractCounter value '+counter)
operation="minus"

 if(counter==0){ 
	numToSub=parseInt(str)

	console.log('num To Sub Value '+prevValue)
 }
if(counter>=1 && prevValue===numToAdd){
numToAdd=prevValue+parseInt(str)
prevValue=numToAdd;
} 
if(counter>=1 && prevValue===numToSub){
numToSub=numToSub-parseInt(str)
prevValue=numToSub
	console.log('numtoSub value '+ numToSub);
}
if(counter>=1 && prevValue==numToDivide){
numToDivide=numToDivide/parseInt(str)
prevValue=numToDivide;
}
if(counter>=1 && prevValue==numToMultiply){
numToMultiply=numToMultiply*parseInt(str)
prevValue=numToMultiply;
} 

displayWind.textContent="";
prevValue=numToSub;
counter++;
});
//Multiply Event
btnMultiply.addEventListener("click", function(){
operation="multiply";
 str=displayWind.textContent;
if(counter==0){ 
numToMultiply=parseInt(str);
prevValue=numToMultiply;
 }
if(counter>=1 && prevValue==numToMultiply){
numToMultiply=numToMultiply*parseInt(str)
prevValue=numToMultiply;
} 

if(counter>=1 && prevValue==numToSub){
numToSub=numToSub-parseInt(str)
prevValue=numToSub
}
if(counter>=1 && prevValue==numToAdd){
numToAdd=numToAdd+parseInt(str)
prevValue=numToAdd;
}
if(counter>=1 && prevValue==numToDivide){
numToDivide=numToDivide/parseInt(str)
prevValue=numToDivide;
}
displayWind.textContent="";
	 counter++;
});
//Division Event
btnDivision.addEventListener("click", function(){
operation="divide";
 str=displayWind.textContent;
if(counter==0){
numToDivide=parseInt(str);
prevValue=numToDivide;
}
if(counter>=1 && prevValue==numToDivide){
numToDivide=numToDivide/parseInt(str)
prevValue=numToDivide;
}
if(counter>=1 && prevValue==numToMultiply){
numToMultiply=numToMultiply*parseInt(str)
prevValue=numToMultiply;
} 

if(counter>=1 && prevValue==numToSub){
numToSub=numToSub-parseInt(str)
prevValue=numToSub;
}
if(counter>=1 && prevValue==numToAdd){
numToAdd=numToAdd+parseInt(str)
prevValue=numToAdd;
}

displayWind.textContent="";
	 counter++;

});

//Answer Event
btnAnswer.addEventListener("click", function(){
	let secondStr=displayWind.textContent;
//	let secondNum=parseInt(secondStr);
let secondNum=parseFloat(secondStr);
	console.log("second Number "+secondNum);
displayWind.textContent="";
if(operation==="plus"){
let sum=addFunction(prevValue, secondNum);
let roundedSum=Math.round(sum * 100) / 100;
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
	let roundedNum=Math.round(callDivide * 100) / 100;
displayWind.textContent=roundedNum;
}


});
btnClear.addEventListener("click" ,function(){
       	displayWind.textContent='';

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
});

   
