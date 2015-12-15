// 1. click a num button...
    //displays the number in the display
// 2. click an arith button
    //displays the arith in the display with the number
// (1) repeats
// 3. click diffWidth button
    //retrieves elements in display
    //transforms them into numbers (+)
    //displays value


$(document).ready(function(){
    $(".num").click(function(){
         event.preventDefault();
         $("#display h2").append(this.innerHTML);
         //console.log(this.innerHTML);
         console.log($("#display h2").text());
    }); 
    
    $(".arith").click(function(){
       event.preventDefault();
        $("#display h2").append(this.innerHTML);
        console.log($("#display h2").text());
    });
    
    $("#clear-btnOne").click(function(){
        event.preventDefault();
        $("#display h2").empty(); 
    });
    
    $("#clear-btnTwo").click(function(){
        event.preventDefault();
        var modString= $("#display h2").text().substring(0,$("#display h2").text().length-1);
        $("#display h2").text(modString); 
    });
    
    $("#diffWidth").click(function(){
       event.preventDefault();
        try {
            $("#display h2").text(eval($("#display h2").text()));
        } catch(err){
            alert(err.message);
        }
    });

    
});





//console.log(eval($("#display h2").text()));
