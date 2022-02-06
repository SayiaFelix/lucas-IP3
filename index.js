

function myButton(){
    var score=0;
   
   var question1=document .first .question1 .value;
   var question2=document .first .question2 .value;
   var question3=document .first .question3 .value;

   var result= document.getElementById("submitboard")
   //var quiz = document.getElementById("quiz");
   if (question1=="Javascript"){score++};
   if (question2=="Loop"){score++};
   if (question3=="Boolean"){score++};
   result.textContent=score;
   //quiz.style.display="none";

   // document.write (score)

   //if (score==3) {
  //  submitboard.textContent="Congratulations!! You Have Passed. Your score is " + Math.floor(score/3*100)+"%"+""
  // } else if (score==2) {
  //  submitboard.textContent="Congratulations!! You Have Fairly Passed. Your score is " + Math.floor(score/3*100)+"%"+""
  // } else {
  //   submitboard.textContent="Congratulations!! Unfortunately you have failed. Your score is " + Math.floor(score/3*100)+"%. Kindly Reattempt the quiz!!!"  
  // }
  }



   //var messages=["Congratulations!! You Have Passed. Your score is " + Math.floor(score/3*100)+"%"+"",  "","Congratulations!! Unfortunately you have failed. Your score is " + Math.floor(score/3*100)+"%. Kindly Reattempt the quiz!!!"];

   //var range;
   //      if(score>2){
  //     range=0;
  //     }
   //      if(score=2){
   //       range=1;
  //     }
   //     if(score<=1){
   ////       range=2;
     //  }


   // 


   //document.getElementById("messages").innerHTML=messages[range];
