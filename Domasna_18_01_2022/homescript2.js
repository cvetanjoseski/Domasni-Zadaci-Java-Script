$(window).on("load",function(){
    $("#button").click(function(){
        let validate = new Option().style;
        validate.color = $("#color").val();
        if($("#text").val()){
            if (validate.color==$("#color").val()){
                $("#myDiv").append(`<h1>${$("#text").val()}</h1>`).css("color",validate.color);
            }
           else{
            $("#myDiv").append("<h3>You entered a invalid color !!! </h3>");
           }
        }
        else{
            $("#myDiv").append("<h3>You didnt write anything!!! </h3>");
        }
    })
})