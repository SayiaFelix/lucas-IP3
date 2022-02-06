function myButton(){
    var score=0;
   
   
   var question1=document .first .question1 .value;
   var question2=document .first .question2 .value;
   var question3=document .first .question3 .value;

    

   if (question1=="Javascript"){score++};
   if (question2=="Loop"){score++};
   if (question3=="Boolean"){score++};


   document.getElementById("empty").style.display="none";
   document.getElementById("correct").innerHTML="You Score " + score + " correct";
   
     

     //document.write (score)

    

  };