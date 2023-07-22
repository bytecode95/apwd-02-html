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
console.log(".............................................")

//Var  - var can be declared and assigned values in any scope in any times
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
console.log(".............................................")

//const - cant value assigning, declare and when creating const variable can be used in that scope only

const d = 10;
//const d = 12; ===> error

//d = 12; ==> error
console.log(d)

{
    console.log(d)
    //const d = 34; ==> error
    //d = 34; ==> error
    const g = 78;
}

//console.log(g)

console.log(".............................................")