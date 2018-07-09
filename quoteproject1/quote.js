
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

            console.dir("prop " + JSON.stringify(queryObj))
            // console.dir("prop " + JSON.stringify(revisionsStr))
            //  console.dir('sliceStr  '+sliceStr)
            var re = /\* /
            var ind;
            ind = revisionsStr.search(re)

            console.log("re " + ind)
            var newSubString = revisionsStr.slice(ind + 1)

            console.log("newSubString  " + newSubString)

            var regExpEnd = /\*\*/

            var lastIndx = newSubString.search(regExpEnd)

            // console.log("lastIndx "+lastIndx)
            var newSubString1 = newSubString.slice(0, lastIndx)
            console.log("newSubString1  " + newSubString1)
            
            quote.innerHTML = newSubString1;

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
