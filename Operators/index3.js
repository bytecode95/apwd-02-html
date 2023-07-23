console.log("run javascript3")
var a = true;
var b = false;
var line = "<br/>";

// &&(LOGICAL AND)
document.write("logical AND"+line);
document.write("a && b : ");
result = a && b;
document.write(result)
document.write(line, line);

// ||(LOGICAL OR)
document.write("logical OR"+line);
document.write("a || b : ");
result = a || b;
document.write(result)
document.write(line, line);

// !(LOGICAL NOT)
document.write("logical NOT"+line);
document.write("!(a || b): ");
result = !(a || b);
document.write(result)
document.write(line, line);