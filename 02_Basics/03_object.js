// two type of objects
// singleton ( method to create : Object.create )

// object literals

const mySyb = {
    Symbol : "key007"
}

const myObj = {
    name : "Manan" , 
    [Symbol] : "myKey1",
    age : 21 ,
    location : "patan" , 
    work : "ahmedabaad" , 
    lastLoginDay : [ "Monday" , "Friday" ] ,
}

// console.log(myObj.location)
// console.log(myObj["age"])
// console.log(myObj[Symbol])

myObj.greeting = function(){
    console.log("hello JS ")
}

console.log(myObj.greeting());