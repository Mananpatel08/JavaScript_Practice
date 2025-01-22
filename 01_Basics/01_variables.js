const accountId = 286        //immutable
let accountEmail = "pmanan123@gmail.com"
var accountPassword = "1234"
accountCity = "Ahmedabaad"   // without any variable decalre is possible to store value but it is not good practice 
let accountState;            // it gives output: undefined value  

// accountId = 222   // not allow because 'const' is immutable

console.log(accountId);

/*
not use var because of issue in block
scope ( scope : {  } ) and functional scope 
*/

accountEmail = "manan0755@gmail.com"
accountPassword = "4567"
accountCity = "Patan"

console.table([accountEmail , accountPassword , accountId , accountCity , accountState])