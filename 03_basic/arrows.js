const user={
    username : "manawwer",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        
    }
}

user.welcomeMessage()
user.username=("chaudhary")
user.welcomeMessage()

// function chai(){
//     let username="manawwer"
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username="manawwer"
//     console.log(this.username);
// }
// chai()

const chai =() => {         //arrow function
    let username="manawwer"
    console.log(this.username);
}
chai()


// const addTwoNum = (num1, num2) => {
// return num1+num2
// }

// const addTwoNum = (num1, num2) => num1 + num2  //implicit 
// const addTwoNum = (num1, num2) => ( num1 + num2 ) //implicit return
//if we use curly breaces "{" we have to use return otherwise no need of return
const addTwoNum = (num1, num2) => ({username:"manawwer"}) //implicit 

console.log(addTwoNum(2,5));
