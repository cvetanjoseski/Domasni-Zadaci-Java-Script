let urName=prompt("Enter your name ");
let button=document.getElementById("name");
button.addEventListener("click",function(){
    alert(`Hello ${urName}`)
});