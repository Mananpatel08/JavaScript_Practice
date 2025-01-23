//basic sum function

function addTwoNumber(a,b){
    console.log( a + b )
}

// addTwoNumber(2,4)

function isLogin(username = "unknown"){
    // if (username === undefined){
    //     return "please enter username"
    // }
    return `${username} just logged in`
}
// console.log(isLogin())

function superMarker(...val1){
    return val1
}
// console.log(superMarker(100 , 200 , 300))

function superMarker2( val1 , val2 , ...val3){
    return val3
}
// console.log(superMarker2(100 , 200 , 300 , 400))         // [ 300,400 ] bcz.. val1 = 100 , val2 = 200


const user = {
    name : "Harvey",
    age : 39,
}
function handelObject(anyobject){
    return `hello my name is ${anyobject.name} and my age is ${anyobject.age}`
}
console.log(handelObject(user))

