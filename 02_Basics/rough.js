console.log(fr);    // ❌ ReferenceError: Cannot access 'fr' before initialization  
const fr="ty"       // Declaration and initialization happen here
console.log(fr);    // This line is not reached because of the ReferenceError above

/* 
=> error bcz.. Cannot access 'fr' before initialization
=> Accessing fr before its declaration results in a ReferenceError.
*/

t1()                // This works because the function is hoisted, You can call them anywhere in their scope,


let data;           // ❌ ReferenceError (cannot access before declaration)
console.log(data);  // ✅ output : undefined
data = "okk"        // Initialization happens here
console.log(data)   // ✅ output: okk
/*
=> Only the declaration (let data;) is moved to the top.
=> The initialization (e.g., data = "okk";) stays where it is in the code.
=> The value will be undefined until the code execution reaches the initialization.
*/

function t1(){
    console.log("hiii");
} 

/*
=> Function declarations are fully hoisted. This means the entire function's definition 
   is moved to the top of its scope during the execution phase.
*/




// summary
/*
diffrence:
=> var: Declaration is hoisted and initialized as undefined. Can be accessed before its declaration (though it's undefined).
=> let and const: Declaration is hoisted but remains uninitialized (in TDZ). Accessing them before declaration results in a ReferenceError.
=> const: Must be initialized at the time of declaration.

ex. ------- const ----------
console.log(fr); // ❌ ReferenceError: Cannot access 'fr' before initialization
const fr = "ty"; // Declaration and initialization happen here
console.log(fr); // ✅ "ty"

ex. ------- let ----------
let data;           // Declaration hoisted
console.log(data);  // ❌ ReferenceError
data = "okk";       // Initialization happens here
console.log(data);  // ✅ "okk"

ex. ------- var ----------
var a; // Hoisted declaration
console.log(a); // ✅ Output: undefined
a = 10; // Initialization
console.log(b); // ✅ Output: 20
*/