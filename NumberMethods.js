var num=9.656;
var result=undefined;

//toExponential
result=num.toExponential(2);
console.log("toExponential :"+result);

//toFixed
result=num.toFixed(1);
console.log("toFixed :"+result);
console.log("toFixed with 0:"+num.toFixed(0));

//toPrecision
result=num.toPrecision(3);
console.log("toPrecision :"+result);
console.log("toPrecision with empty para :"+num.toPrecision());

//Number
console.log(Number(true)); 
console.log(Number("10"));
console.log(Number(" 10 "));
console.log(Number("10 25"));
console.log(Number("10,25"));
console.log(Number("Madhu"));
console.log(Number(10.33));

//parseInt
console.log(parseInt(10.323)); 
console.log(parseInt("10"));
console.log(parseInt(" 10 "));
console.log(parseInt("10 25"));
console.log(parseInt("10,25"));
console.log(parseInt("Madhu"));

//parseFloat
console.log(parseFloat(10.323)); 
console.log(parseFloat("10"));
console.log(parseFloat(" 10 "));
console.log(parseFloat("10 25"));
console.log(parseFloat("10,25"));
console.log(parseFloat("Madhu"));

//positive Infinity
console.log("Divided by 0 :"+(10/0));

//negative -Infinity
console.log(" Divided by 0 with negative :"+(-10/0));

//NaN- Not a Number
console.log("Divided by String :"+(100/"Hello"));

