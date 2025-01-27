// Arrow functions allow us to write shorter function syntax:

const chia1 = function() {
    let username = "manan"
    console.log(this)           // (normal function) - it will print this values
}
// chia1()

const chia = () => {
    let username = "manan"
    console.log(this)           // (arrow function) - it will print an empty set
}
// chia()

const math = (val1,val2) => {
    return val1+val2
}
console.log(math(3,3))              //6

//or ( implicit return )

let myFunction = (val1, val2) => val1 * val2;
// console.log(myFunction(5,6));            //30


// ======== diffrence ======

/*
Normal Function: Has its own this context. The value of this depends on how the function is called (whether it’s a method or a standalone function).

Arrow Function: Does not have its own this. Instead, it inherits this from the surrounding lexical context (the scope in which the function is defined).
*/


/*
Use of arguments Object:
Normal Function: Has access to the arguments object, which contains all the arguments passed to the function, even if they are not explicitly named in the parameter list.
*/

function sum() {
  console.log(arguments); // Prints all passed arguments
}
sum(1, 2, 3); // Output: [1, 2, 3]

/* 
Arrow Function: Does not have its own arguments object. It will inherit the arguments from the surrounding function (if any).
*/

const sum = () => {
  console.log(arguments); // Error: arguments is not defined
};
sum(1, 2, 3);