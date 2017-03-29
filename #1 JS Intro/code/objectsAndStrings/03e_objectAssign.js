function getWorker(firstName, lastName, doctor, salary, iq){
  //TODO: put doctor, salary and iq to parameter details
  //TODO: define default values for details (ex. "medical", "1k", "99")
  //TODO: use Object.assign to get currentOptions
  //TODO: log currentOptions
  let fullName = firstName + " " + lastName;
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

let {doctor, fullName} = getWorker("Ryszard", "Greatest", "economy", "20k", "73")

console.log("doctor " + doctor + " " + fullName)
