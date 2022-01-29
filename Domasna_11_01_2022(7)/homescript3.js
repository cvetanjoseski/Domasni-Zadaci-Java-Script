let car={
    model:"Audi",
    color:"Red",
    year:"2012",
    fuel:"Petrol",
    fuelConsmption:0.09,
    calculateConsumption:function(kilometers){
        return kilometers*this.fuelConsmption;
    }
}
console.log(car.calculateConsumption(101))