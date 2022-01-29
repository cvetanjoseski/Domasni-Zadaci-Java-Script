$(window).on("load",function(){
    $("#jsonCall").click(function(){
        $.ajax({url: "https://jsonplaceholder.typicode.com/todos",
          success: function(object){
            console.log(object);
           for(let i in object){
              if(object[i].completed==true){                  
                  $("#firstDiv").append(`<h4>${object[i].id} ${object[i].title}-----Completed</h4>`) 
              }
              else{
                $("#firstDiv").append(`<h4>${object[i].id} ${object[i].title}-----Not Completed</h4>`)
              }
           }
          }});
        });
})