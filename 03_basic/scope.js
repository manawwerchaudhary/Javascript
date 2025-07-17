let a=10
const b=20
var c=30  //var has scope outside the scope thats why we avoid to use var

function one(){
    const username="manawwer"
    
    function two(){
        const website="youtube"
        console.log(username)
    }
    // console.log(website) outside the scope
    two()
}
one()

if(true){
    const username="manawwer"
    if(username==="manawwer"){
        const website=" youtube"
        console.log(username + website)
    }
}

console.log(addOne(5))  //will work fine

function addOne(num){
    return num+1
}


// addTwo(5) //will not work if we write this before the function itself **because of hoesting 
const addTwo=function(num){
    return num+2
}
