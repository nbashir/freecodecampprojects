window.addEventListener("load" ,function(){
let startTime;
let sessionTime=1
let timeDec;
let sec=5;
let newBreaktime;
let breaktime=1
let newSessionTime;
let sec1=5;
let sessionStart;
let breakStart;
let eventType;
let prevTime
let prevBreak
let prevSec;
	displayTimeId.innerHTML=sessionTime;
sessionLengthId.innerHTML=sessionTime;
breakLengthId.innerHTML=breaktime;

startBtn.addEventListener("click",function(){
newBreaktime=breaktime-1;

newSessionTime=sessionTime-1

startTime = setInterval(myFunction,1000);

function myFunction(){
	
	

	eventType="sessionStart";

if(sec!==0){
	sec=sec-1
	console.log("session Time "+newSessionTime +" "+sec)
		}

if(sec===0){
if(newSessionTime>0){
newSessionTime=newSessionTime-1
sec=5

}

}

 
if(newSessionTime===0 && sec===0){
	eventType="breakStart";
	displaySessionId.innerHTML="Break";
	displayTimeId.innerHTML=breaktime;

	if(sec1!==0){
sec1=sec1-1
console.log("session break "+newBreaktime +sec1)
	}

if(sec1===0){
if(newBreaktime>0){
breaktime=1
sec1=5

}
}
}
/*
if(newBreaktime===0 && sec1===0){
//displaySessionId.innerHTML="Session";
//displayTimeId.innerHTML=sessionTime+":"+sec;
	newSessionTime=sessionTime-1;
sec=5



console.log("sessionTime  "+displayTimeId.innerHTML)


		

}else

//displaySessionId.innerHTML="Break";
//	displayTimeId.innerHTML=breaktime;
	
newBreaktime=breaktime-1
sec1=5
console.log("breaktime  "+displayTimeId.innerHTML)


}


}
*/
if(newBreaktime===0 && sec1===0){
//displaySessionId.innerHTML="Session";
//displayTimeId.innerHTML=sessionTime+":"+sec;
breaktime=1
sec1=5
}
if(newSessionTime===0 && sec===0){
sessionTime=1
sec=5
}
if(eventType==="sessionStart"){

	displayTimeId.innerHTML=newSessionTime+":"+sec;

}else

displayTimeId.innerHTML=newBreaktime+":"+sec1;	

	
}

	


});


stopBtn.addEventListener("click",function(){
	clearInterval(startTime)
});

decBtn.addEventListener("click", function(){
if(sessionTime>1){
	sessionTime=sessionTime-1

	displayTimeId.innerHTML=sessionTime;
sessionLengthId.innerHTML=sessionTime;
}else
displayTimeId.innerHTML=sessionTime;
sessionLengthId.innerHTML=sessionTime;
});
incBtn.addEventListener("click", function(){

	sessionTime=sessionTime+1
displayTimeId.innerHTML=sessionTime;
sessionLengthId.innerHTML=sessionTime;


});
decBreak.addEventListener("click", function(){
if(breaktime!==1){
	breaktime=breaktime-1

	breakLengthId.innerHTML=breaktime;
}else
breakLengthId.innerHTML=breaktime;

	
});
incBreak.addEventListener("click", function(){
	breaktime=breaktime+1
breakLengthId.innerHTML=breaktime;

});

});

function myStopFunction() {
    clearInterval(startTime);
}


