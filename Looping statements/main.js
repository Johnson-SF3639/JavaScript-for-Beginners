document.write("<h1>Looping statements</h1>");

const myArray = ["a","b","c","d","e"];

document.write("<h3>For Loop</h3>");
for(let i=0; i<myArray.length; i++){
    // if(i==3) continue;
    // if(i==3) break;
    document.writeln(`index ${i} of value is : ${myArray[i]}<br>`);
}

document.write("<h3>While Loop</h3>");
let i = 0;
while(i<myArray.length){    
    document.writeln(`index ${i} of value is : ${myArray[i]}<br>`);
    i++;
}

document.write("<h3>Do While Loop</h3>");
i = 0;
do{
    document.writeln(`index ${i} of value is : ${myArray[i]}<br>`);
    i++;
}while(i<myArray.length);

document.write("<h3>For Each Method</h3>");
myArray.forEach(function(element,index){    
    document.writeln(`index ${index} of value is : ${element}<br>`);
});

document.write("<h3>For Each Method with Arrow Functions</h3>");
myArray.forEach((element,index)=>{document.writeln(`index ${index} of value is : ${element}<br>`);
});

document.write("<h3>For Each Method with Arrow Functions and without Index</h3>");
myArray.forEach(element => document.writeln(`Value is : ${element}<br>`));

document.write("<h3>For...of Method without Index</h3>");
for(const element of myArray){
    document.writeln(`Value is : ${element}<br>`);
}

document.write("<h3>For...of Method with Index</h3>");
for(const [index,element] of myArray.entries()){
    document.writeln(`index ${index} of value is : ${element}<br>`)
}

document.write("<h3>For...in Method</h3>");
for (let propety in myArray){
    document.writeln(`index ${propety} of value is : ${myArray[propety]}<br>`);
}

// const num = 1000000;
// const arr = new Array(num);

// console.time("for");
// for(let i=0; i<num; i++){
//     console.timeEnd("for");
// }
