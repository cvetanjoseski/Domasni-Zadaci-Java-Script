function evenOdd(numsArray){
    let i=0;
    while(i<numsArray.length){
        if((numsArray[i]%2)!=0){
            document.write(numsArray[i]+' ');
            i++;
        }
        else{
            document.write(numsArray[i]+ '\n');
            i++;
        }
    }
}
let arrayNums=[];
let arrayNumsParsed=[];
for(let i=0;i<20;i++){
    arrayNums[i]=prompt("Enter number");
    arrayNumsParsed[i]=parseInt(arrayNums[i]);
}
evenOdd(arrayNumsParsed);