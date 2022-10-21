document.write("<h1>Objects </h1>");

function Cars (carBrand, carModel, price) {
    this.carBrand = carBrand;
    this.carModel = carModel;
    this.price = price;
    this.testingFunction = function(){
        document.write("<h2>This car has Auto Pilot</h2>");
    }
}
var c1= new Cars("Tesla","Model 3",3500);
var c2= new Cars("Tesla","Model p",4500);
c1.testingFunction();
document.write("<h2>Car Model : "+c2.carModel+ "</h2>");

