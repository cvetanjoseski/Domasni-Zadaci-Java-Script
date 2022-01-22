
let row=+prompt("How much row u want to have?");
let column=+prompt("How much columns you want to have?");
let myTable=document.getElementById("tableOne");
let tabelBody=document.createElement("tbody");
for(let i=0;i<row;i++){
    console.log(row);
    let rowS=document.createElement("tr");

for(let j=0;j<column;j++){
    console.log(column);
    let space=document.createElement("td");
    let spaceText=document.createTextNode(`cell in ${i+1} row and column ${j+1}`);
    space.appendChild(spaceText);
    rowS.appendChild(space);
}
tabelBody.appendChild(rowS);
}
console.log(tabelBody);
myTable.appendChild(tabelBody);

