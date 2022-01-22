//Exercise 1 
var a = "SEDC is beautiful" ;
var b = 100 ;
var c = true ;
console.log(a);
console.log(typeof a); 
console.log(b);
console.log(typeof b); 
console.log(c);
console.log(typeof c); 

//Exercise 2
var area ;
var r;
var pi = 3.14;
r = prompt("Enter radius");
area = r*pi ; 
console.log("Your circle are is: "+ area);

// Exercise 3
var phone ;
var price  ;
var rate ;
var finalPrice ; 
var priceForAllPhones ;
var parsedPhone = parseFloat(phone = prompt("how much phones u want to buy?")) ; 
var parsedPrice =  parseFloat(price = prompt("how much is the price without tax?")) ;
var parsedRate = parseFloat(rate = prompt("how much is the tax?"));
var parsedPhonePrice = parseFloat(finalPrice = (parsedPrice*parsedRate)/ 100 + parsedPrice ) ;
var parsedPriceForAllPhone = parseFloat(priceForAllPhones =  parsedPhonePrice*parsedPhone );
console.log("Your price is: "+ parsedPriceForAllPhone) ;



