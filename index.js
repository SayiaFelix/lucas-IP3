function myButton(){
    var score=0;
   
   
   var question1=document .first .question1 .value;
   var question2=document .first .question2 .value;
   var question3=document .first .question3 .value;

    

   if (question1=="Javascript"){score++};
   if (question2=="Loop"){score++};
   if (question3=="Boolean"){score++};




   var messages=["Congratulations!! You Have Passed. Your score is " + Math.floor(score/3*100)+"%"+"",  "Congratulations!! You Have Fairly Passed. Your score is " + Math.floor(score/3*100)+"%"+"","Congratulations!! Unfortunately you have failed. Your score is " + Math.floor(score/3*100)+"%. Kindly Reattempt the quiz!!!"];

   var range;
         if(score>2){
       range=0;
       }
         if(score=2){
          range=1;
       }
        if(score<=1){
          range=2;
       }


   document.getElementById("empty").style.display="none";

   document.getElementById("messages").innerHTML=messages[range];
   document.getElementById("correct").innerHTML="You Score " + score + " correct";
   
     document.write (score)
 }