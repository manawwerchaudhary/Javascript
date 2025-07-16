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
/*
*****************************************************
2 type of memory
stack and heap
primitive => stack
non-primitive => heap
whenever we use stack memory we got a copy of that variable
in heap we got reference of the value if we change that will reflect in original value
*/


let nasirAge=15
let yasirAge=nasirAge

nasirAge=16

console.log(yasirAge)
console.log(nasirAge)

let userOne={
    email:"one@gmail.com",
    name:"one"
}
let userTwo=userOne

userTwo.email="two@icloud.com"

console.log(userOne.email)
console.log(userTwo.email)
