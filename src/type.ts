function greet(fisrtname:string){
    console.log("hello"+fisrtname);
}

greet("ad")

// two sum
function sum(a:number,b:number):number{  // give return as argument
return a+b;
}
console.log(sum(2,4));

//type inference   greater than 18
function islegal(age:number)
{
  if(age>18){
    return true 
  }
  else{
    return false
  }
}
let X:boolean=islegal(14)
console.log(X);


//how to return to function to a number like callbacks

function isreturn(fn:()=>void){
    setTimeout(fn,2000)
}
isreturn(function (){
    console.log("hi there ")
})




// target function in tsconfig.file 
//zod is for runtime checks
//interfaces are powerful tool for defining a structure an object  
const grett=(name:string)=>`hello ${name}`
//interfaces

interface user{
firstname:string,
lastname:string,
email:string,
password:string
}
const user1:user={
firstname:"aman",
lastname:"da",
email:"nanatt",
password:"123445"
}

// create a interfa e to give user as a input and check whether user as a legal

function aslegal(user:{
firstname:string,
lastname:string,
age:number,  
}){
  if(user.age>18){
    return true
  }else
  {
   return false
  }
}

aslegal({
firstname:"aman",
lastname:"da",
age:19
})