import Square from './geometrics/Square'
import Circle from './geometrics/Circle'
import Triangle from './geometrics/Triangle'


let s = new Square(4)
let c = new Circle(1)
let t = new Triangle(2, 4)

console.log(s.area())
console.log(c.area())
console.log(t.area())