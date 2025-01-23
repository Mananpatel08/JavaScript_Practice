/*
There are two type of datatype 

1] Primitive ( Call by Value ):
These are immutable and stored directly in memory.
7type : String , Number , Boolean , Null , Undefine , symbol , BigInt

2] Non-Primitve ( Call by Reference ) :
These are mutable and stored as references in memory.
Arrry , Objects , Function
*/

//Primitive
let name = "Manan"          //string
let age = 21                // integer
let isLoggedIn = false      // boolean

const id = Symbol('286')      // symbol use for unique value like id or etc.
const userId = Symbol('286')  // both different

//Non-Primitive
const heros = [ "Iron-man" , "Cap" , "Thor" ]
let myObj = {
    name : "manan",
    age : 21,
}
const myfinction = function(){
    console.log("Hello ji!");
}