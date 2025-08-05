
const accountId = 144553;
let accountEmail = "meet@google.com";
var accountPassword = "12345";
accountCity = "Surat";
let accountState;

// accountId = 2; <--- Not Allowed(Cannot Change Constant variable).

accountEmail = "abc@gmail.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
     ---> Prefer not to use var because of issue in block scope and functional scope.
*/
