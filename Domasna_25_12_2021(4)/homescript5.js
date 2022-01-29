function sumMax(myArray){
    let i=0;
    let max=0;
    let min=myArray[0];
    while(i<myArray.length-1){
        if(min>myArray[i]){
        min=myArray[i];
    }
    
    else if (myArray[i]>max){
        max=myArray[i];        
    }
    i++;
    }
    return min+max;
}
let myArr=[4,2,3,4,5,3,17,8,1];
alert(sumMax(myArr));