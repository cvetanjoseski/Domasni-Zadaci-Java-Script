function atm(cashW,cashFull){
    let amount=0;
    if((cashFull-cashW)<0){
        alert("You dont have that much money in your account");
    }
    else if((cashFull-cashW)>0){
        amount=cashFull-cashW;
        alert(`You have withdraw a ${cashW} dollars`);
        return(amount);
    }
}
let cashAll=15000;
let cashOut = prompt("Enter how much u want to withdraw");
let cashOutParsed=parseInt(cashOut);
alert(`You have left ${atm(cashOutParsed,cashAll)}`);

