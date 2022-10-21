document.write("<h1>Functions </h1>");

function addNumber(number1, number2){
    var total = number1 + number2;
    return total
}
var output = addNumber(4,3);
document.write("<h2>The total is : "+ output+"</h2>");

output = addNumber("4",3);
document.write("<h2>The total is : "+ output +"</h2>");


