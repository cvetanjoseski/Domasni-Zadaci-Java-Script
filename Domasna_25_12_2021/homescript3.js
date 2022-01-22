let globalCounter=0;
function bigString(arrayStrings){
    let i=0;
    arrayStrings.pop();
    while(globalCounter!=i+1){
        document.write(arrayStrings[i]+' ')
        i++;
    }
}
let arrayStr=[];
while(arrayStr[arrayStr.length-1]!="@"){
    arrayStr[globalCounter]=prompt("Enter some informaiton and for END ENTER @");
    globalCounter++;
}
bigString(arrayStr);