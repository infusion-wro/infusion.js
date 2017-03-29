
function areaOfCircle(r){
  const PI = 3.14
  //PI = 4 //TypeError: Assignment to constant variable.

  return PI*r*r
}

console.log(areaOfCircle(2))

//Variables declared with const are scoped to the nearest block.
