function findNumber(num,myArray){
    let j=0;
    for(let i of myArray){
        if(i===num){
            console.log(i);
            j++;
        }
        else{
            continue;
        }
    }
    alert(`There are ${j} occurrences of number ${num} in the array`);
    return;
}
let firstArray=[1,2,3,4,5,6,7,9,12,32,43,3,5,6,7,8,3,145,3,6];
let secondArray=[1,2,34,4,5,6,7,9,12,32,43,48,5,6,9,9,3,145,3,6];
let thirdArray=[1,17,11,4,5,6,7,5,12,32,43,3,5,6,7,8,3,145,3,6];
let findNum=0;
findNum=+prompt("ENTER WHICH NUMBER YOU WANT TO FIND");
console.log(findNumber(findNum,firstArray));
findNum=+prompt("ENTER WHICH NUMBER YOU WANT TO FIND");
console.log(findNumber(findNum,secondArray));
findNum=+prompt("ENTER WHICH NUMBER YOU WANT TO FIND");
console.log(findNumber(findNum,thirdArray));