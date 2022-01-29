let myObb = {
    name:"Goran",
    kind:"Men",
    message: function(){
       return this.name+" is a beautiful "+this.kind+" and feels happy.";
    }
}
let speak = myObb.message();
console.log(speak);



