class Animal{
  constructor(name){
    this.name = name
  }
  speak(){
    console.log(this.name)
  }
}

class Cat extends Animal{
  constructor(name, color){
    super(name)
    this.color = color
  }
  speak(){
    super.speak()
    console.log(`mrrrr with ${this.color}`)
  }
}

let pet = new Cat("cat", "black")
pet.speak()
