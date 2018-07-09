window.addEventListener("load" ,function(){
let startTime;
let sessionTime=1
let timeDec;
let sec=10;
let sessionBreak=1
let newBreaktime;
let breaktime=1
let newSessionTime;
let sec1=10;
let sessionStart;
let breakStart;
let eventType;
displayTimeId.innerHTML=sessionTime;
sessionLengthId.innerHTML=sessionTime;
//To start the pomodoro clock 
startBtn.addEventListener("click",function(){
newBreaktime=breaktime-1;


	startTime = setInterval(myFunction,1000);
	function myFunction(){

		if(sessionTime>0){
newSessionTime=sessionTime-1
			displaySessionId.innerHTML="Session";
displayTimeId.innerHTML=sessionTime;
eventType="sessionStart";

if(sec!==0){
	sec=sec-1
	console.log("session Time "+newSessionTime +" "+sec)
		}
if(sec===0){
if(newSessionTime>0){
newSessionTime=newSessionTime-1
	sec=10
	sec=sec-1
	}
}

}
 
if(newSessionTime===0 && sec===0){
eventType="breakStart";
	displaySessionId.innerHTML="Break";
	displayTimeId.innerHTML=breaktime;

	if(sec1!==0){
sec1=sec1-1
}

if(sec1===0){
if(newBreaktime>0){
newBreaktime=newBreaktime-1
	sec1=10
	sec1=sec1-1
}

}
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
sessionTime=sessionTime-1
displayTimeId.innerHTML=sessionTime;
sessionLength.innerHTML=sessionTime;
});
incBtn.addEventListener("click", function(){
	sessionTime=sessionTime+1
displayTimeId.innerHTML=sessionTime;
sessionLength.innerHTML=sessionTime;
});
});

function myStopFunction() {
    clearInterval(startTime);
}


