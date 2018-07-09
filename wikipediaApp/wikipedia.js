
window.addEventListener("DOMContentLoaded", function() {
    btn1.addEventListener("click", function() {
console.log("click  " )
  var inputValue=inputB.value
  console.log("inputValue  "+inputValue) 
   

    btn.addEventListener("click", function() {

        var req = new XMLHttpRequest();
        var html = ""
        req.onload = function() {
            if (req.status === 200) {
                var myData = req.response
                 console.log("myData " + myData)
                console.log("myData String" + JSON.stringify(myData))
                var searchMusic = myData.query.search;

                console.log("searchMusic " + JSON.stringify(searchMusic))
               var html="";
                for (var i = 0; i < searchMusic.length; ++i) {
                    var findTitle = searchMusic[i].title
                  var findSnippet=searchMusic[i].snippet;
                   var pageId=searchMusic[i].pageid;
                   console.log(pageId)
                   var pageDetailId=pageId
                  var aTagUrl="https://en:wikipedia.org/?curid="+pageId
                  
                   html+="<div class=wTitle id=titleHeading>"+"<a href=\"https://en.wikipedia.org/wiki/?curid=\"+concat(pageId)>" + findTitle +"</a>"+"</div>"+"<br>"
                   html+="<div class=wTitle id=snippetText>"+findSnippet+"</div>"
                    wikiTitle.innerHTML = html
                    
                   
                   
                    console.log(findTitle +"    "+ pageId +"   "+ findSnippet)

                }

            } else

                console.log("fail")
        }

        var  inputSearch=inputValue
        console.log("inputSearch  "+inputSearch)
        var url = 'http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&titles=Main+Page&srsearch='+inputSearch
       console.log(url)
       // var url = 'http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&titles=Main+Page&srsearch=music'
       
        req.responseType = 'json'
        req.open("GET", url)
        req.send();

    });
});
});
