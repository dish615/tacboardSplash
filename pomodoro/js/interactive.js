$(document).ready(function(){
    var numberOne= +$("#numberOne").text();
    
    var numberTwo= +$("#numberTwo").text();
    
    
    
    $("#minusOne").click(function(){
        event.preventDefault();
        numberOne= numberOne-1; 
        console.log(numberOne);
        if (numberOne!==0){
            $("#numberOne").empty();
            $("#numberOne").text(numberOne);
        } else {
            alert("You can't have negative minutes, silly!");
        }
        
        
    });
    
    $("#plusOne").click(function(){
        event.preventDefault();
        numberOne= numberOne+1; 
        console.log(numberOne);
        $("#numberOne").empty();
        $("#numberOne").text(numberOne);
        
        
    });
    
    $("#minusTwo").click(function(){
        event.preventDefault();
        numberTwo=numberTwo-1; 
        console.log(numberTwo);
        
        if (numberTwo!==0) {
            $("#numberTwo").empty();
            $("#numberTwo").text(numberTwo);
            $("#circle-elm a h1").text(numberTwo);
        } else {
           alert("You can't have negative minutes, silly!"); 
        }
    
        
    });
    
    $("#plusTwo").click(function (){
        event.preventDefault();
        numberTwo=numberTwo+1; 
        console.log(numberTwo);
        $("#numberTwo").empty();
        $("#numberTwo").text(numberTwo);
        $("#circle-elm a h1").text(numberTwo);
    });
    
   
 
    var timerVar;
    var numSesh;
    var timerBreak;
    var numBreak;
   /* numSesh= +$("#circle-elm a h1").text()*60;
    numBreak= +$("#numberOne").text()*60; */
    var Clock= {
        
        
        start: function() {
            numBreak=+$("#numberOne").text()*60;
            numSesh=+$("#numberTwo").text()*60;
            
            timerVar= setInterval(function(){
                numSesh--;
                var remainder;
                var value;
                if (numSesh/60<1 || numSesh/60===1) {
                    value= "00";
                } else {
                    value=Math.floor(numSesh/60);
                }
                if (numSesh % 60<10) {
                    remainder="0"+ (numSesh % 60);
                } else {
                    remainder= numSesh % 60;
                }
                $("#circle-elm a h1").text(value+":"+ remainder);
                
                if (numSesh===0) {
                    document.getElementById("chasing").play();
                    clearInterval(timerVar);
                    $("#namer h2").text("Break");
                    timerBreak= setInterval(function(){
                        numBreak--;
                        if (numBreak/60<1 || numBreak/60===1) {
                            value= "00";
                        } else {
                            value=Math.floor(numBreak/60);
                        }
                        if (numBreak % 60<10) {
                            remainder="0"+ (numBreak % 60);
                        } else {
                            remainder= numBreak % 60;
                        }
                        
                        $("#circle-elm a h1").text(value+":"+remainder);
                    if (numBreak===0) {
                        document.getElementById("chasing").pause();
                      document.getElementById("fml").play();
                      clearInterval(timerBreak);
                    }
                    }, 1000);

                }
                
            },1000);
            
        },
        
        pause: function (){
          if(numBreak===+$("#numberOne").text()*60)  {
              clearInterval(timerVar);
              /*delete this.timerVar;*/
          } else {
              clearInterval(timerBreak);
              /*delete this.timerBreak;*/
          }
            console.log(numSesh);
            console.log(numBreak);
        },
        
        resume: function(){
            
            if(numBreak===+$("#numberOne").text()*60) {
            timerVar= setInterval(function(){
                numSesh--;
                var remainder;
                var value;
                if (numSesh/60<1 || numSesh/60===1) {
                    value= "00";
                } else {
                    value=Math.floor(numSesh/60);
                }
                if (numSesh % 60<10) {
                    remainder="0"+ (numSesh % 60);
                } else {
                    remainder= numSesh % 60;
                }
                $("#circle-elm a h1").text(value+":"+ remainder);
                
                if (numSesh===0) {
                    document.getElementById("chasing").play();
                    clearInterval(timerVar);
                    $("#namer h2").text("Break");
                    timerBreak= setInterval(function(){
                        numBreak--;
                        if (numBreak/60<1 || numBreak/60===1) {
                            value= "00";
                        } else {
                            value=Math.floor(numBreak/60);
                        }
                        if (numBreak % 60<10) {
                            remainder="0"+ (numBreak % 60);
                        } else {
                            remainder= numBreak % 60;
                        }
                        
                        $("#circle-elm a h1").text(value+":"+remainder);
                    if (numBreak===0) {
                        document.getElementById("fml").play();
                      clearInterval(timerBreak);
                    }
                    }, 1000);

                }
                
            },1000);    
                
                
            } else {
            timerBreak= setInterval(function(){
                        numBreak--;
                        if (numBreak/60<1 || numBreak/60===1) {
                            value= "00";
                        } else {
                            value=Math.floor(numBreak/60);
                        }
                        if (numBreak % 60<10) {
                            remainder="0"+ (numBreak % 60);
                        } else {
                            remainder= numBreak % 60;
                        }
                        
                        $("#circle-elm a h1").text(value+":"+remainder);
                    if (numBreak===0) {
                        document.getElementById("fml").play();
                      clearInterval(timerBreak);
                    }
                    }, 1000);    
                
                
            }
        }
            
        
    };
    
    
    $("#circle-elm a").click(function(){
        event.preventDefault();
        if(!($("#circle-elm").hasClass("started"))) {
            $("#circle-elm").addClass("started");
            Clock.start();
        } else if($("#circle-elm").hasClass("started") && !($("#circle-elm").hasClass("paused"))) {
            $("#circle-elm").addClass("paused");
            if($("#namer h2").text()==="Break") {
                document.getElementById("chasing").pause();
            }
            Clock.pause();
        } else if($("#circle-elm").hasClass("started") && $("#circle-elm").hasClass("paused")) {
            $("#circle-elm").removeClass("paused");
            if($("#namer h2").text()==="Break") {
                document.getElementById("chasing").play();
            }
            Clock.resume();
        }
     });
    
    
    $("#reset button").click(function(){
        event.preventDefault();
        Clock.pause();
        
        if ($("#circle-elm").hasClass("paused")){
           $("#circle-elm").removeClass("paused"); 
        }
        
        if($("#namer h2").text()==="Break") {
            document.getElementById("chasing").play();
        }
        
        if(!($("#namer h2").text()==="Break")) {
            var classList= $("#circle-elm").attr("class");
            console.log(classList);
            Clock.start();

        } else {
            numBreak=+$("#numberOne").text()*60;
            timerBreak= setInterval(function(){
                numBreak--;
                if (numBreak/60<1 || numBreak/60===1) {
                    value= "00";
                } else {
                    value=Math.floor(numBreak/60);
                }
                if (numBreak % 60<10) {
                    remainder="0"+ (numBreak % 60);
                } else {
                    remainder= numBreak % 60;
                }

                $("#circle-elm a h1").text(value+":"+remainder);
            if (numBreak===0) {
                document.getElementById("fml").play();
                clearInterval(timerBreak);
            }
            }, 1000);
            
        }
        
        if (numbreak===0) {
            Clock.start();
        }
    });
    
    
    

    
   
  
    
    
    
});