let myDate=new Date()

// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleString())


let myCreatedDate =new Date("04-04-2003")
// console.log(myCreatedDate.toLocaleString())

let newDate=new Date()
console.log(newDate.getMonth())

newDate.toLocaleString('default', {
    weekday:"long"
})
console.log(newDate)