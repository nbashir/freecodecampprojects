window.addEventListener("load" ,function(){
let startTime;
let sessionTime=2
let timeDec;
let sec=60;
let breakTime=5
let newBreakTime;
	let newSessionTime;
time.innerHTML=sessionTime;

startBtn.addEventListener("click",function(){
newSessionTime=sessionTime-1
newBreakTime=breakTime-1	
	startTime = setInterval(myFunction,1000);
let counter=0

	function myFunction(){

		if(sec!==0){

			sec=sec-1
	
	console.log(newSessionTime +" "+sec)
		}
if(sec===0){
if(newSessionTime>0){
newSessionTime=newSessionTime-1
	sec=60

	sec=sec-1
}
}
if(newSessionTime===0&&sec===0){

	clearInterval(startTime)
}
time.innerHTML=newSessionTime+":"+sec;
counter++;
console.log(counter)


	}
});
stopBtn.addEventListener("click",function(){
	clearInterval(startTime)
});

decBtn.addEventListener("click", function(){
sessionTime=sessionTime-1
time.innerHTML=sessionTime;

});
incBtn.addEventListener("click", function(){
	sessionTime=sessionTime+1
time.innerHTML=sessionTime;

});
});



