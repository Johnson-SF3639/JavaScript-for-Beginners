document.write("<h1> Error Handling</h1>");
// try{
//     document.write(sayHello());
// }catch(e){
//     document.write("Message : "+e.message+"<br>");
//     document.write("Description : "+e.description+"<br>");
//     document.write("Stack : "+e.stack+"<br>");
// }finally{
//     document.write("<br>Printed Line");
// }

var number1 = Number(prompt("Please enter the 1st Number"));
var number2 = Number(prompt("Please enter the 2nd Number"));

try{
    if(number2 == 0){
        throw {
            error : "Divid by Zero error",
            message : "Denominator cannot be ZERO"
        }    
    }else{
        document.write("Result = "+ (number1/number2));
    }
}catch(e){
    document.write("Error : "+e.error+"<br>");
    document.write("Message : "+e.message+"<br>");
}

