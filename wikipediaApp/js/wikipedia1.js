window.addEventListener("DOMContentLoaded", function() {
    btnSubmit.addEventListener("click", function() {
        console.log("click  ");
        var inputValue = inputSearch.value;
        
        console.log("inputValue  " + inputValue);

        btnSearch.addEventListener("click", function() {

            var req = new XMLHttpRequest();
            var html = ""
            req.onload = function() {
                if (req.status === 200) {
                    var myData = req.response
                    // console.log("myData " + myData)
                    //console.log("myData String" + JSON.stringify(myData))
                    var searchItem = myData.query.search;

                    console.log("searchItem " + JSON.stringify(searchItem))
                  
                    for (var i = 0; i < searchItem.length; ++i) {
                        var findTitle = searchItem[i].title;
                        var findSnippet = searchItem[i].snippet;
                        console.log("findSnippet  " + findSnippet);
                        var pageId = searchItem[i].pageid;
                        console.log(pageId);
                        var pageDetailId = pageId
                        var titleText = findTitle;
                        var URL = "https://en.wikipedia.org/wiki/?curid=" + pageId;

                        html += "<div class=wTitle id=titleHeading>" + findTitle.link(URL) + "</div>" + "<br>";
                        html += "<div class=wTitle id=snippetText>" + findSnippet + "</div>";
                        wikiTitle.innerHTML = html;

                        //console.log(findTitle +"    "+ pageId +"   "+ findSnippet)

                    }

                } else

                    console.log("fail");
            }

            var inputSearch = inputValue;
           // console.log("inputSearch  " + inputSearch)
            var url = 'http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&titles=Main+Page&srsearch='+inputSearch;

            //console.log(url)

            // var url = 'http://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&titles=Main+Page&srsearch=music'
            req.responseType = 'json';
            req.open("GET", url);
            req.send();

        });
    });
});
