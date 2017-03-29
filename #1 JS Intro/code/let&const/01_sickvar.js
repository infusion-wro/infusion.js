function areYouSick(jsVersion){
  if(jsVersion < 6){
    var oldVersionMessage = "You have a problem with variable scope"
    console.log(oldVersionMessage)
  }
  else{
    var newVersionMessage = "You are like other programming language! Cool"
    console.log(newVersionMessage)
  }

  console.log(newVersionMessage)
  //console.log(notExistVariable)
}

areYouSick(5)
