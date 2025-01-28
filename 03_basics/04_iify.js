// Immediately Invoked Function Expressions (IIFE)

(function db(){
    // named iife
    console.log(`DATABASE CONNECTED`);
})();       // semicolons required here for end the 'iife'

//First for where we write the function definition
// ()()        
// second for exeution 

( (name) => {
    console.log(`hello ${name}`)
}
)('manan');
