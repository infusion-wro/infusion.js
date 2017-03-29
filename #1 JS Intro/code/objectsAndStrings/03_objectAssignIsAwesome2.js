
function getFileFromCloud(fileName, url, options = {}){
  const defaultOptions = {user: "test", password: "admin"}
  const currentOptions = Object.assign({}, defaultOptions, options)

  console.log(currentOptions)
}

getFileFromCloud("temp.txt", "http://awesome.cloud", {user: "Romek", secure: "true", fullLog: "true"})
