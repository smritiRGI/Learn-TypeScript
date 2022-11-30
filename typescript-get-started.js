var user = {
    name: "Smriti",
    age: 24
};
// Refer  : https://bobbyhadz.com/blog/typescript-cannot-redeclare-block-scoped-variable#:~:text=The%20error%20%22Cannot%20redeclare%20block-scoped%20variable%22%20occurs%20when,once%20in%20a%20block%20and%20use%20ES%20modules.
// Cannot redeclare block-scoped variable in TypeScript #
// The error "Cannot redeclare block-scoped variable" occurs when we redeclare a variable in the same block or when TypeScript uses global typings, which interfere with local variable names. To solve the error, only declare a variable once in a block and use ES modules.
// Here is an example of how the error occurs.
// index.ts
// // ⛔️ Error: Cannot redeclare block-scoped variable 'name'.ts(2451)
// // lib.dom.d.ts(17330, 15): 'name' was also declared here.
// const name = 'James Doe';
// The name variable is declared somewhere in the typings for the DOM library, so the global type definition clashes with the local variable declaration.
// You can also solve the error by renaming the variable.
