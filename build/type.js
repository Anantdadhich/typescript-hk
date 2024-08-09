"use strict";
function greet(fisrtname) {
    console.log("hello" + fisrtname);
}
greet("ad");
// two sum
function sum(a, b) {
    return a + b;
}
console.log(sum(2, 4));
//type inference   greater than 18
function islegal(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let X = islegal(14);
console.log(X);
//how to return to function to a number like callbacks
function isreturn(fn) {
    setTimeout(fn, 2000);
}
isreturn(function () {
    console.log("hi there ");
});
// target function in tsconfig.file 
//zod is for runtime checks
//interfaces are powerful tool for defining a structure an object  
const grett = (name) => `hello ${name}`;
const user1 = {
    firstname: "aman",
    lastname: "da",
    email: "nanatt",
    password: "123445"
};
// create a interfa e to give user as a input and check whether user as a legal
function aslegal(user) {
    if (user.age > 18) {
        return true;
    }
    else {
        return false;
    }
}
aslegal({
    firstname: "aman",
    lastname: "da",
    age: 19
});
