function boysGirls(a,b){
    if(a<10 &&  b<10){
        alert(`0${a} girls and 0${b} boys`);
        return;
    }
    else if(a >= 10 && b<10){
        alert(`${a} girls and 0${b} boys`);
        return;
    }
    else if(a<10 && b>=10){
        alert(`0${a} girls and ${b} boys`);
        return;
    }
    else if(a>=10 && b>=10){
        alert(`${a} girls and ${b} boys`);
        return;
    }
}
let a = prompt("Enter number of girls in team");
let b = prompt("Enter number of boys in team");
let aParsed = parseInt(a);
let bParsed = parseInt(b);
boysGirls(aParsed,bParsed);