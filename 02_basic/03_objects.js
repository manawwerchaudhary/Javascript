const mySym=Symbol("key1")
const JsUser={
    name:"manawwer",
    "full name":"manawwer chaudhary",
    age: 23,
    [mySym]:"myKey1",
    city:"baghpat",
    email:"manawwer@gmail.com",
    lastLogin:["sat","mon"]
}

    // console.log(JsUser.name)  //not good way but will work fine
    // console.log(JsUser["name"]) //better way
    // console.log(JsUser["full name"])
    // console.log(JsUser[mySym])

    JsUser.email="manawwer@microsoft.com"

    // Object.freeze(JsUser) //no update will happen after this
    JsUser.email="manawwer@google.com"

    // console.log(JsUser)


    JsUser.greeting=function(){
        console.log("hello js user")
    }

    JsUser.greetingTwo=function(){
        console.log(`hello js user ${this.name}`)
    }
    

    console.log(JsUser.greeting())
    console.log(JsUser.greetingTwo())

    console.log(Object.keys(JsUser)) //to print keys datatype is array

    console.log(Object.values(JsUser))