const balance=new Number(100)
console.log(balance)

console.log(balance.toString().length)
console.log(balance.toFixed(2))

const otherNumber=13.99345
console.log(otherNumber.toPrecision(2))

const hundred=1000000
console.log(hundred.toLocaleString('en-IN'))

//random number b/w 10 to 20
const min=10
const max=12

console.log(Math.floor(Math.random() * (max - min +1))+min)