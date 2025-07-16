let score="99"
console.log(typeof score)

let valueInNumber =Number(score)
console.log(typeof valueInNumber)
console.log( valueInNumber)

let number=""
let result=Boolean(number)
console.log(result)


// array

let array=[2,4,6,8]
console.log(array)

//symbol => stores uniques

let id=Symbol(123)
let anotherId=Symbol(123)
console.log(id===anotherId)

// function

let myfunction=function(){
    console.log("hello world")
}
myfunction();