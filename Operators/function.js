console.log("run");

// console.log("Go to home...");
// console.log("Go to school...");

// printOne();
printTwo();
printOne();
printOne();
printOne();
printOne();
printOne();
printOne();
printOne();
printOne();
printOne();
printOne();

console.log('........................')

function printOne(){
    console.log("Go to home...");
}

function printTwo(){
    console.log("Go to school...");
}


maths();
total(15,25)
total(476,125)


// maths2023(5,2) for return type function does not print directly its results
const result = maths2023(2, 5)
console.log(result);


const result1 = maths2023(60, 5)
console.log(result1);

console.log(maths2023(10,8))



function maths(){
    let one = 10;
    let two = 20;
    let total = one + two
    console.log(total)
}

//print function values

function total(one, two){
    let total = one + two
    console.log(total)
}


//return function

function maths2023(one, two){
    let total = one * two
    return total;
}

