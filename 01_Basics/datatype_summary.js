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



// ===================================== Memory =====================================

/*
there is two type of memory

1] stack ( store Primitive datatype)
2] heap  ( store Non-Primitive datatype )

all Primitive datatype store in stack and whenever you call it gives a copy of variable while 
when you call value from heap it give you refrence of it

ex:
*/

let myName = "Manan Patel"
let myNickName = myName
myNickName = "MP"

// console.log(myName)                  // Manan Patel
// console.log(myNickName)              // MP

// it store value in stack beacuse it is primitive datatype
// it not change myName original value because stack give only copy , that value is still save in stack

let user1 = {
    name : "Kevin",
    age : 23,
}

let user2 = user1
user2.name = "Chirag"

// console.log(user1.name)         //Chirag
// console.log(user2.name)         //Chirag

// see here change both value from heap memory also change beacause it gives refrence 
// that mean whatever you change it also change it's original value