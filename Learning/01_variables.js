const accountId = 144553 //declare constant
let accountEmail = "jaivin@google.com" // use this for declare variable
var accountPassword = "12345"
accountCity = "Ahmedabad" // also declare variable using this type but it is not okay 

let accountstate;
// accountId = 2  // not alowed 

console.log(accountId);
accountEmail = "jai@gmail.com"
accountPassword = "123120"

console.table([accountId,accountEmail,accountCity,accountPassword,accountstate]);

/*
prefare not to use var because of issue in block scope and functional scope

please use let or const
*/

