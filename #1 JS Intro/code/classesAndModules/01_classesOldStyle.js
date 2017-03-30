
//use constructor function

function Animal(name){
  this.name = name
}

Animal.prototype.speak = function(){
  console.log(this.name)
}

let pet = new Animal("cat")
pet.speak()
