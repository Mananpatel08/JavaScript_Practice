// whatever write in if statement is in block scope and whatever write outside if statement is global scope
// var c = 300
// global scope

let a = 100;

if (true){
    const a = 10
    let b = 20
    //block scope
}


console.log(a)               // 100
console.log(b)              // ReferenceError: b is not defined bcz you not define b outside if statement mean in global scope
// console.log(c)

