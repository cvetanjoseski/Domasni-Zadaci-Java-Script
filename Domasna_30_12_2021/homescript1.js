function sum(myArray){
    let sumAll=0;
    for(let i=0;i<myArray.length;i++){
        sumAll=sumAll+myArray[i];
    }
    return sumAll;
}
let arrayF=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let list=document.getElementById("numbers");
for(let i of arrayF){
    let li=document.createElement("li");
    li.innerText=i;
    list.appendChild(li);
}
let sumPrint=document.getElementById("sum");
sumPrint.innerText=`You sum of array is ${sum(arrayF)}`;
