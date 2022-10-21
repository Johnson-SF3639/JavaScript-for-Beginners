document.write("<h1> Conditional Statements – If Else </h1>");

document.write("<h2> Odd or Even Program :</h2>");
var x=5;
if(x%2==0){
    document.write("<h3>Number "+ x +" is Even Number </h3>");
}else{
    document.write("<h3>Number "+ x +" is Odd Number</h3>")
}

document.write("<h2> Positive or Negative number Program :</h2>");
var x=8;
if(x==0){
    document.write("<h3>Number "+ x +" is Zero </h3>");
}else if(x<0){
    document.write("<h3>Number "+ x +" is Negative Number</h3>")
}else {
    document.write("<h3>Number "+ x +" is Positive Number</h3>")
}

document.write("<h2> Positive and Even number Program :</h2>");
var x=5;
if(x>0){
    document.write("<h3>Number "+ x +" is Positive ");
    if(x%2==0){
        document.write("and Even Number.")
    }
    else {
        document.write("but Odd Number.")
    }
}
else {
    document.write("<h3>Number "+ x +" is Negative Number</h3>")
}