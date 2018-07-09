window.addEventListener("load" ,function(){
let startTime;
let sessionTime=3
let timeDec;
let sec=60;
startBtn.addEventListener("click",function(){
	startTime = setInterval(myFunction,1000);

	function myFunction(){

		if(sec!==0){
	sec=sec-1
		}

		timeDec=sessionTime
		
	if(sec===0 && sessionTime!==0){
	timeDec=sessionTime-1
    
if(sec
	
	}


console.log(timeDec +" "+sec)
pomodoroBox.innerHTML=timeDec+":"+sec;

}
});
stopBtn.addEventListener("click",function(){
	clearInterval(startTime)
});

});

function myStopFunction() {
    clearInterval(startTime);
}


