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



// Flow Controllers
// IF

const marks = 40;
if (marks > 30){
    console.log("Exam Passed")
}

//IF else

if ( marks > 50){
    console.log("good average")
}else{
    console.log("below average")
}
console.log('........................')

// else if can be combined more conditions

if (marks>=75){
    console.log("Grade: A")
}else if(marks>=65) {
    console.log("Grade B")
}else if(marks>=55){
    console.log("Grade: C")
}else{
    console.log("fail")
}

console.log('........................')

//nested if there are IF conditions in other IF condition









console.log('........................')
//Switch

switch(marks){
    case 75:
        console.log("Grade: A");
        break;
    case 65:
        console.log("Grade: B");
        break
    case 55:
        console.log("Grade: C");
        break
    default:
        console.log("Fail");
}