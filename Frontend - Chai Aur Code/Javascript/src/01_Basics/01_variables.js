const accountId = 144553;
let accountEmail = "Meet@google.com";
var accountPassword = "12345";
accountCity = "Surat";

// accountId = 2; <--- Not Allowed(Cannot Change Constant variable).

accountEmail = "sh@sh.com";
accountPassword = "212121";
accountCity = "Bengaluru";
let accountState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
     ---> Prefer not to use var because of issue in block scope and functional scope.
*/