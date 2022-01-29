$(window).on("load",function(){
    $("#average").click(function(){
        let avg = (parseInt($("#first").val()) + parseInt($("#second").val()) + parseInt($("#third").val()))/3;
        console.log(typeof(avg));     
        if(avg<10){
            $("#firstDiv").append(`<h2>Your result is ${avg} and its red </h2>`).css("color","red");
        }
        else{
            $("#firstDiv").append(`<h2>Your result is ${avg} and its green </h2>`).css("color","green");
        }
    })
})