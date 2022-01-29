function weightInChickens(weight){
    let chickenweight=0;
    chickenweight=weight*2;
    return chickenweight;
}
let urWeight=+prompt("ENTER YOUR WEIGHT");
let urWeightHtml=document.getElementById("weight");
urWeightHtml.innerText=`You are ${weightInChickens(urWeight)} chickens `;