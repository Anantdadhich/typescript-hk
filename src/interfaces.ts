//we can creste a class which implements a class with interface 

interface person{
    name:string,
    age:number,
    greet(phase:string):void
}

class employe implements person{
    name: string;
    age: number;

    constructor(n:string,a:number){
        this.name=n;
        this.age=a;
    }
   greet(phase: string):void {
       console.log(`${phase} ${this.name}`);
   }

}
const e=new employe("hahs",22)
console.log(e.greet("hello"))
//Types: Offer a broader approach to defining different kinds of data structures. They can represent primitive types (like string, number), complex types (like arrays, objects), or even combinations of these types (unions, intersections).
//Interfaces: Primarily focus on defining the shape of objects. They specify the properties that an object must have and their expected data types.

//you does not create a class with type

//to print the id of a user, which can be a number or a string

type numberorstring=string |number;

function printid(id:numberorstring){
    console.log(`ID ${id}`)
}
printid(101);
printid("102");

//intersection
 
type manager={
    name:string,
    department:string
}
type emp={
    name:string,
    doj:number
}

type temalead=manager|emp  // we do intersection of types 

const team:temalead={
    name:"heee",
    doj:12,
    department:"cs"

}
console.log(team)

// arrays in typescript

function maxvalue(arr:number[]){
    let max=0;
    for (let i=0;i<=arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(maxvalue([1,2,3]))

type admin={
    name:string,
    age:number
}
function filtered(admins:admin[]){
    return admins.filter(x=> x.age>=18)
}
console.log(filtered([{
    name:"hhsh",
    age:13
},{
name:"hjfiudcb",
age:19
}]))

