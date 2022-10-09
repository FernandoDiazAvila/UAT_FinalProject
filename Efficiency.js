/*                      Fernando Diaz Avila's Assignment
*///I will work top down and test each line of code everytime I change to debug any errors.
alert ("Are you ready to Launch?"); 


let currentTime=10;
function RunCountDown() {
     while (currentTime >= 0) {
        delay(currentTime); //Here is my loop delay function. 
        currentTime --;          
     }

    function delay(currentTime) { //within this function I added a setTimeout functions which has the program wait
      setTimeout(function() {     //some time or interval measured in miliseconds.
        document.getElementById("DisplayCountDown").innerHTML = "Launching in...";
        console.log(currentTime); 

    //I moved my if/else statment inside this function so everyime the program does loop it will wait before doing it again.
        if (currentTime !=0)    
            {document.getElementById("DisplayCountDown").innerHTML = currentTime;}
        else
            {document.getElementById("DisplayBlastOff").innerHTML = "Blast Off!";}

        //For the half way warning I will simply add another if statement to compare the currentTime to be less than or equal to 5
        //with it appearing it everytime.I thought it be cool if the number changes as well so it wouldn't be a warning 1/2 til luanch
        //only when the currentTime is at 5 and either stays of disappear for the rest of the currentTime.
        if (currentTime <=5)                                        
            {document.getElementById("DisplayCountDown").innerHTML = "Warning Less than "+currentTime+" seconds until launch";}
    //on line 34 I impplemented what I learned from the discussion meeting, of adding string and variables together.
      }, 1500 * currentTime);
    }}

    function disbtn1(){
      document.getElementsByClassName("button button2").disable= true;
      document.getElementsByClassName("button button1").disable= false;
      console.log("button 1 enabled");
    }
    function disbtn2(){
      document.getElementsByClassName("button button2").disable= false;
      document.getElementsByClassName("button button1").disable= true;
      console.log("button 2 enabled");            
    }