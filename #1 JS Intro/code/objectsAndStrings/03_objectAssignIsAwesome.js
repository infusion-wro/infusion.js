
function getFileFromCloud(fileName, url, options = {}){
  const defaultOptions = {user: "test", password: "admin"}
  const currentOptions = {
    user: options.user || defaultOptions.user,
    password: options.password || defaultOptions.password,
    secure: options.secure
  }

  console.log(currentOptions)
}

getFileFromCloud("temp.txt", "http://awesome.cloud", {user: "Romek", secure: "true"})
