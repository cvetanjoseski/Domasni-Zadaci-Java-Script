function dogAge(a,b){
    if(b == "human"){
        return a*7;
    }
    else if(b == "dog"){
        return a/7;
    }
    else{
        alert("You have not entered correct informations");
    }
}
let a = prompt("Plese enter yout age");
let aParsed = parseInt(a);
let b = prompt("Plese enter type of your age dog/human");
alert(dogAge(aParsed,b));
