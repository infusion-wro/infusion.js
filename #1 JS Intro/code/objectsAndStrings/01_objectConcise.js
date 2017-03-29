function getWorker(firstName, lastName, doctor){
  let fullName = firstName + " " + lastName;
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName,
    doctor: doctor,
    isSmart: function(){
      return doctor !== "economy"
    }
  }
}

let worker = getWorker("Ryszard", "Greatest", "economy")

console.log("doctor " + worker.doctor + " " + worker.fullName)
