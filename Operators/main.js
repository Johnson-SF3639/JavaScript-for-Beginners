document.write("<h1> Operators </h1>");
//Additon
var intVariable1 = 10, intVariable2 = 10;
var strVariable1 = "10", strVariable2 = "10";

var intAddition = intVariable1+intVariable2;
var stringAddition = strVariable1+strVariable2;

document.write("<h2> Result of Int Addtion : "+intAddition+" </h2>");
document.write("<h2> Result of String Addtion : "+stringAddition+" </h2>");
document.write("<h2> Result of String Addtion with before Int : "+ (intVariable1 + intVariable2 + strVariable1) +" </h2>");
document.write("<h2> Result of String Addtion with After Int : "+ (strVariable1 + intVariable1 + intVariable2 ) +" </h2>");

