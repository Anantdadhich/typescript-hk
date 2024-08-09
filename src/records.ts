//records give you the cleaner type of objects menas fix set of properties
type stu=Record<string ,{age:number,stu_id:string}>;
// muje bola gya ki tuje na bhai eik record banan haiu students name ka jisma tuje datat put krn ahai with typescript agr  aine backend maine bhi kam keta hu to bhi to maine kya 
// kiya maine kiya ek record banyajo thoda clenaeer type ka ho to maine ek type banaya string of object or usma ek array jisma uski prop batyi jaa ki agw auki id 

 const stur:stu={
    "ubfhu":{age:45,stu_id:'rffffdv'} //isma bhai ye na string hai mera name ki jo uski age or ud bata rahh hai 
}

//maps

interface Ur{
    id:string,
    name:string
}

const usermap= new Map<string,Ur>();

usermap.set('raghav', {id:'herloo',name:'jayesh'});

console.log(usermap.get('raghav'))