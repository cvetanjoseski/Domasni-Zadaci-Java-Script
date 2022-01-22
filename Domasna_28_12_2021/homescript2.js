function nameSurname(first,second){
    let full=[];
    for(let i in first){
        full[i] = `${+i+1}.${first[i]} ${second[i]}`;
        
    }
    return full;
}
let name1=[];
let surname=[];
let j="NO";
for(let i=0;j!="YES";i++){
    name1[i]=prompt("Enter NAME");
    surname[i]=prompt("ENTER SURNAME");
    j=prompt("If you like to end write YES");
}
console.log(nameSurname(name1,surname));