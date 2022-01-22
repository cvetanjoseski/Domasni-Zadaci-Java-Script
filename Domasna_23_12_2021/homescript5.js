function calculateAge(yearBirth,year){
    let age = 0;
    age = year-yearBirth;
    return age;
}
for(let i=0;i<3;i++){
    let yearB=prompt("Input your year of birth");
    let yearBParsed=parseInt(yearB);
    let date=new Date().getFullYear();
    alert(`You are ${calculateAge(yearBParsed,date)} years old`);
}