"use strict";
//we can creste a class which implements a class with interface 
class employe {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    greet(phase) {
        console.log(`${phase} ${this.name}`);
    }
}
const e = new employe("hahs", 22);
console.log(e.greet("hello"));
function printid(id) {
    console.log(`ID ${id}`);
}
printid(101);
printid("102");
const team = {
    name: "heee",
    doj: 12,
    department: "cs"
};
console.log(team);
// arrays in typescript
function maxvalue(arr) {
    let max = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
console.log(maxvalue([1, 2, 3]));
function filtered(admins) {
    return admins.filter(x => x.age >= 18);
}
console.log(filtered([{
        name: "hhsh",
        age: 13
    }, {
        name: "hjfiudcb",
        age: 19
    }]));
