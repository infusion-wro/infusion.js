function getPlayer(firstName, lastName, team){
  let fullName = firstName + " " + lastName;
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: fullName,
    team: team,
    controlType: function(){
      return firstName === "Tomek" ? "alternate" : "classic"
    }
  }
}

let player = getPlayer("Tomek", "Laszkiewicz", "City")

console.log(player.fullName + " uses " +player.controlType() + " control")
