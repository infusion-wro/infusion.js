function getWorker(firstName, lastName, doctor){
  let fullName = `${firstName} ${lastName}`;
  return {
    firstName,
    lastName,
    fullName,
    doctor,
    isSmart(){
      return doctor !== "economy"
    }
  }
}

let {doctor, fullName} = getWorker("Ryszard", "Greatest", "economy")

console.log(`doctor ${doctor} ${fullName}`)
