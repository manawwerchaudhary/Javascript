//Immediately Invoked Function Expressions (IIFE)
//immediate execute right after write the func

// global scope ke pollution se problelm hoti h kai baar jo bhi uss global scope ke pollution h usko hatane k lie IIFE ka use kia
//  ()()

(function chai(){           //named iife
    console.log(`DB connected`);
})();
        //always remember semicolon

( (name) => {       //unnamed iife
    console.log(`DB connected Two ${name}`);
})("manawwer")