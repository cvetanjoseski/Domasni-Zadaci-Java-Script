function findNumber(myArray,type){
    let numbers=[];
    if(type==="EVEN"){
        for(let item of myArray) {
            if(item%2==0) {
                numbers.push(item);
            }
            else{
                continue;
            }
        }
        
        return numbers;
    }
    else if(type==="ODD"){
        for(let item of myArray) {
            if(item%2!=0) {
                numbers.push(item);
            }
            else{
                continue;
            }
        }
        
        return numbers;
    
    }
}
let newArray=[];
let numToFind;
let endAr;
for(i=0;endAr!="@";i++){
    newArray[i]=+prompt("ENTER YOUR NUMBERS");
    endAr=prompt("IF YOU FINISH ENTER @ FOR CONTINUE PRESS ENTER ");
}
numToFind=prompt("What would you like to find Even numbers or Odd. PLEASE ENTER EVEN/ODD");
alert(findNumber(newArray,numToFind));