//a re used to define the set of constants
enum direction{  //enum is like emurations 
    up,  //0
    down,  //1
    right,//2
    left   //3
 }
// enum does not exist keyword in javascript

 function dosomething(keypressed:direction):void{
  switch(keypressed){
    case direction.up:
        console.log("you preesed up")
        break;
            case direction.down:
        console.log("you preesed down")
        break;
            case direction.left:
        console.log("you preesed left")
        break;
            case direction.right:
        console.log("you preesed right")
        break;
        default:
            console.warn("invlaid direction") 

  }
 }
 dosomething(direction.up)


 //enums in express

 