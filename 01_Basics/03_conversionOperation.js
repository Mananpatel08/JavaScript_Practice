// string => number
let score = "20abc"

// console.log(typeof(score))                  // string

let valueInNumber = Number(score)

// console.log(typeof(valueInNumber))          // Number
// console.log(valueInNumber)                  // NaN ( not a number )

/*
note:
20 => type : number , output : 20
"20abc" => type : number , output : NaN
true => 1 , false => 0
*/

// string => boolean
let isLoggedIn = "manan"
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(typeof(booleanIsLoggedIn))

/*
node:
1 => true , 0=> false
"" => false , "manan" => true
*/

// number => string
let num = 10
let numberIsnum = String(num)
// console.log(numberIsnum)              //10
// console.log(typeof(numberIsnum))     //String


// *********************************** Operations ****************************************

let value = 3
let nagValue = -(value)
// console.log(nagValue)                   // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);          //2 to power 3
// console.log(2/2);
// console.log(2%2);

let str1 = "ok"
let str2 = "bye"

// console.log( str1 + str2 )      // okbye

console.log( 2 + "2" );             //22
console.log( "2" + 2 );            //22
console.log( "2" + 2 + 1 );         //221
console.log( 2 + 2 + "4" );         //44
