$(window).on("load",function(){
    function NewAnimal(name,type,age){
        this.name = name;
        this.type = type;
        this.age = age ;
    }
    
    let animalObj= [];
    $("#createButton").click(function(){
    animalObj=new NewAnimal($("#aName").val(),$("#aType").val(),$("#aAge").val());
    console.log(animalObj);
    $("#animals").last().append(`<li>${animalObj.name} ${animalObj.type} ${animalObj.age}</li>`)
    });
})

