console.log("external java script")

// variables 3 types
// 1. var
// 2. let
// 3. const

// global variable and local variable

var name= "Chethana"  //global variables
Check()
function Check(){
    var name = "Virajini"   //local variable
    document.write(name)
}
document.write(name)

//Let can be redeclare only in another scope but value can be assigned in scope

let x = 10;

//let x = 12;

{
    //let x = 12;
    x = 12;
    console.log(x)
}

console.log(x)

//Var  - var can be declare and assigned values in any scope in any times
var y = 10;
console.log(y)
    var y = 12;
        y = 23;

/*{
    console.log(y)
    var y = 30;
        y = 25
}*/

console.log(y)
