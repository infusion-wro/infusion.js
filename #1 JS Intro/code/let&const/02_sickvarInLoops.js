function fetchProfile(userName, callback){
  setTimeout(callback, 3000)
}

function loadDataFromServer(userNames){
  for(var i in userNames){
    fetchProfile(userNames[i], function(){
      console.log("fetched for ", userNames[i])
    })
  }
}

loadDataFromServer(["Marcin", "Tomek", "Ryszard"])
