function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Change this line

}

window.addEventListener("DOMContentLoaded", function() {
    getquotebtn.addEventListener("click", function() {

        sendRequest('https://en.wikiquote.org/w/api.php?origin=*&action=query&titles=Barbara%20Walters&prop=revisions&rvprop=content&format=json');

    });

});

function sendRequest(url) {
    var html = '';
    console.log('make new requet object')
    var request = new XMLHttpRequest();
    console.log('register response request')
    request.onload = function() {
        if (request.status === 200) {

            var jsonReceive = request.responseText

            console.log("responseReceived  " + jsonReceive);
            var jsonResp = JSON.parse(request.response)
            console.log("showing Response " + JSON.stringify(jsonResp))
            console.dir(jsonResp)
            var queryObj = jsonResp['query']['pages']['117841']['revisions']
            var revisionsStr = queryObj[0]['*']

            //console.dir("prop " + JSON.stringify(queryObj))
            // console.dir("prop " + JSON.stringify(revisionsStr))

            re = /\n\*[^*].*/gi

            var newArr = revisionsStr.match(re)
            console.log("newArr " + newArr)
            finalStrArr=[]
            for(var i=0; i<newArr.length-1;++i){
                var removeStar=newArr[i].slice(2)
               // console.log('removeStar '+removeStar)
               regExp=/\[\[|\]\]/g
                newStr=removeStar.replace(regExp,'')
               // console.log(" newStr " + newStr)
                regExp1=/\|/
                finalStr=newStr.replace(regExp1, " or ")
                //console.log("finalStr "+finalStr)
               
               finalStrArr.push(finalStr) 
               console.log('finalStrArr '+ "array legth  " +finalStrArr.length + finalStrArr)
           
           }
           
           var randomNumber=randomRange(0,finalStrArr.length-1)
           console.log("randomNumber " + randomNumber)
             var displayQuote=finalStrArr[randomNumber]
             console.log("displayQuote "+ displayQuote)
           

quote.innerHTML=displayQuote;
          quote1.value = displayQuote;
            console.log("input box value"+quote.value)
        } else
            console.log("fail")
    }
    console.log('open conection to server')
    //request.open('GET', 'https://en.wikiquote.org/w/api.php?origin=*&action=query&titles=Barbara%20Walters&prop=revisions&rvprop=content&format=json', true);
    request.open('GET', url, true);
    //request.setRequestHeader('Content-Type', 'application/json')//
    //request.setRequestHeader("Origin", "origin")//
    console.log('send request to server')
    request.send();
    return "request sucessful";
}
;//sendRequest('https://en.wikiquote.org/w/api.php?origin=*&action=query&titles=Barbara%20Walters&prop=revisions&rvprop=content&format=json')
