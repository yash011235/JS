//no change
const accountId = 14453
let accountEmail = "yashasvimahawar2005@gmail.com"
//we don't use var because in the past, there was no concept of scope
//NEVER USE VAR, because of issue in function scope and functional scope 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2 not allowed

accountEmail = "abc@yahoo.com"
accountPassword = "12121212"
accountCity = "Alwar"
console.log(accountId)
console.log(accountEmail)

console.table([accountId, accountEmail, accountPassword, accountCity])
console.log(accountState)