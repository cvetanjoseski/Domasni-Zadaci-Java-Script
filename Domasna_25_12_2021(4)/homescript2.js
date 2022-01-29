function calculate(num1,num2,num3,num4,num5){
    let sum = num1+num2+num3+num4+num5;
    return sum;
}
function validateNumbers(numbersValidate){
    for(let i=0;i<5;i++ ){

        if(isNaN(numbersValidate[i])) {
            alert("You have written NotANumber");
            return;
        }
        
    }
    alert(`Sum of this numbers is ${calculate(numbersParsed[0],numbersParsed[1],numbersParsed[2],numbersParsed[3],numbersParsed[4])}`)
}
let numbers = [];
let numbersParsed=[];
for(let i=0;i<5;i++){
    numbers[i]=prompt("Input number ");
    numbersParsed [i] = parseInt(numbers[i]);
}
validateNumbers(numbersParsed);