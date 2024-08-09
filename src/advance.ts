 /*interface User {
    name:string;
    age:number;
}

function sumofagfe(user1:User,user2:User){
    return user1.age +user2.age;
}

sumofagfe({
    name:'bhemmm',
    age:23
},
{
    name:'bhim',
    age:30
}) */

//picks in typescript
//it can pick and create the type by specific properties of existing type

interface User{
    name:string,
    age:number,
    email:string,
    password:string
}
type UpdateProps= Pick<User,'name'|'email'>
//partila makes all properties  optional
type Partialprops=Partial<UpdateProps>

function Updatedata(updateprops:Partialprops):void{
console.log(`name ${updateprops.name} ,email: ${updateprops.email}`)
}
Updatedata({
    name:"john",
    email:"john@gmail.com"
})

