$(window).on("load",function(){
    $("#button").click(function(){
        $("#myDiv").append(`<h1>How are u today ${$("#name").val()} ?</h1>`);
    })
})