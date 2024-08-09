const x:number=3;
console.log(x);

let w:unknown=1;
w="string"
w={
    runexisten:()=>{
        console.log("hello")
    }
} as {
    runexisten:()=>void
}

//readonly keyword is used to prevent the arrays to changes
const names:readonly string[]=["hello"]
