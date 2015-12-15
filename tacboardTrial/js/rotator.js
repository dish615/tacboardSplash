$(document).ready(function() {

    $("#carousel nav a").click(function() {
        event.preventDefault();

        var ind= $(this).index("#carousel nav a");
        //console.log(ind);
        //console.log($("#all-three"));
       $("#all-three").animate({"margin-left": "-"+ind*1285});
        
        //$("#all-three").css("margin-left", 1285);
        //console.log($("#all-three").css("margin-left"));


         //console.log("hello?");


        $("#carousel nav a").removeClass("active");
        $(this).addClass("active");
        return false;
    });
    
    $("#x-img").click(function(){
        event.preventDefault();
        console.log("hello!");
        $("#black-bar-img").css("display","none");
        
    });
    
    $("#feat").click(function(){
       event.preventDefault();
        document.getElementById("features").scrollIntoView();
        
    });
    
    $("#bout").click(function(){
       event.preventDefault();
        document.getElementById("rotator").scrollIntoView();
        
    });
    $("#cont").click(function(){
       event.preventDefault();
        document.getElementById("contact").scrollIntoView();
        
    });
    
});
