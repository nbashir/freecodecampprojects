window.addEventListener("DOMContentLoaded", function() {
	var req = new XMLHttpRequest();
	req.onload = function() {
		if (req.status === 200) {
			var myData = req.response
	 console.log("myData  " + JSON.stringify(myData))
	console.dir("myData "+myData)
	for(var i=0; i<myData.data.length;++i){
		userId = myData.data[i].user_id
	//       console.log("userId  "+ userId)
	var userStatus=myData.data[i].type
//	var userUrl=myData.data[i].thumbnail_url 
	var userTitle=myData.data[i].title
	//console.log(JSON.stringify("userId "+ userId + "  userStatus "+ userStatus +" title "+ userTitle))

	findUserName(userId,userStatus)
	}
		} else

			console.log("fail");
	}
	// var url="https://wind-bow.gomix.me/twitch-api"
	var url = "https://api.twitch.tv/helix/streams?first=20"
		req.responseType = 'json';
	req.open("GET", url);
	req.setRequestHeader("Client-ID", "e5m8bb5dpad0pbgcck4swql3l2sta7")
		req.send();

/*-----------------------------------------*/
	/*	
	
		var freecodeUrl="https://go.twitch.tv/"+"freecodecamp"
		var html=''
		var html="<div>"+"freecodecamp".link(freecodeUrl)+"</div>"
		//console.log('freecode camp   '+html)
*/
		campStatus("https://api.twitch.tv/kraken/streams/freecodecamp")	
var html=''	
	function findUserName(Id,uStatus){ 
			var req1 = new XMLHttpRequest();
			req1.onload = function() {
				if (req1.status === 200) {
					var userData = req1.response
						console.log("userData  " + JSON.stringify(userData))
						console.log('ustatus   '+uStatus) 
						var userName=userData.data[0].display_name
						// var imgUrl=userData.data[0].profile_image_url
						var userUrl="https://go.twitch.tv/"+userName
						// console.log("display_name  "+userName + userStatus1)
						html+="<div>"+userName.link(userUrl)+"<span>"+uStatus+"</span>"+"</div>"
						userList.innerHTML=html

				} else
					console.log("fail");
			}
			var url = "https://api.twitch.tv/helix/users?id=" +Id
				req1.responseType = 'json';
			req1.open("GET", url);
			req1.setRequestHeader("Client-ID", "e5m8bb5dpad0pbgcck4swql3l2sta7")
				req1.send();
		}
function campStatus(url){
	var req2 = new XMLHttpRequest();
	req2.onload = function() {
		if (req2.status === 200) {
			var myData = req2.response
	// console.log("myData  " + JSON.stringify(myData))
	
	var streamStatus=myData.stream;
	//console.log("streams status  "+JSON.stringify(streamStatus))
	
if (streamStatus===null){
	var freecodeUrl="https://go.twitch.tv/"+"freecodecamp"
		
		freeCodeId.innerHTML="freecodecamp".link(freecodeUrl)+"<span>"+"offline"+"</span>"
}else {
freeCodeId.innerHTML="freecodecamp".link(freecodeUrl)+"<span>"+"live"+"</span>"	
}
		} else

			console.log("fail");
	}
	
//	var url = "https://api.twitch.tv/kraken/streams/freecodecamp"
	
		req2.responseType = 'json';
	req2.open("GET", url );
	req2.setRequestHeader("Client-ID", "e5m8bb5dpad0pbgcck4swql3l2sta7")
		req2.send();

		}

})
