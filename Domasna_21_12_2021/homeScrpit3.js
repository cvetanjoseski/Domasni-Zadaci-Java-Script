let parsedA = prompt("enter first number") ;
let parsedB = prompt("enter second number") ;
let parsedC = prompt("enter third number") ;
let parsedD = prompt("enter fourth number") ;
let parsedE = prompt("enter fifth number") ;
let a = parseInt(parsedA);
let b = parseInt(parsedB);
let c = parseInt(parsedC);
let d = parseInt(parsedD);
let e = parseInt(parsedE);
if(a>b && a>c && a>d && a>e){
    alert("Biggest number is A= "+a) ;
   
}
else if(b>a && b>c && b>d && b>e){
    alert("Biggest number is B= "+b) ;
   
}
else if(c>a && c>b && c>d && c>e){
    alert("Biggest number is C= "+c) ;
    
}
else if(d>a && d>b && d>c && d>e){
    alert("Biggest number is D= "+d) ;
   
}
else if(e>a && e>b && e>c && e>d){
    alert("Biggest number is E= "+e) ;
    
}
else{
alert("You have not written any of the numbers!!!") ;
}