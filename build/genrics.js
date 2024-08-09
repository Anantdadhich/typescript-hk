"use strict";
function getelement(arr) {
    return arr[0];
}
const el = getelement([1, 2, 3, "heoolo", "uhdiub"]);
console.log(el); // we see that if we put the toupper cas ein this code we see that the strictness is follow here
//generics enable you to create the components that work with any datatype while still provide the compile time safety
//swap two numbers using the generics
function swap(a, b) {
    const temp = a;
    a = b;
    b = temp;
    return [a, b];
}
const swaped = swap(10, 33);
const string = swap("fedf", "efefe");
console.log(swaped);
console.log(string);
function getelements(arr) {
    return arr[2];
}
const eld = getelements(["heoolo", "uhdiub"]);
const number = getelements([12, 23]);
const boolean = getelements([true, false]);
console.log(eld.toLocaleLowerCase);
