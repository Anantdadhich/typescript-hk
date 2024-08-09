//readonly  ensures that the properties cannot be changed after the initalised

type Users={
    name:string;
    age:number;
}

const users:Readonly<Users>={
    name:'john',
    age:34
}
//readonly is a compile-time check. It prevents reassignment during compilation but doesn't guarantee immutability at runtime in JavaScript (unless using special libraries