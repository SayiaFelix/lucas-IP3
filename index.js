function myButton(){
    var score=0
   
   
   var currentAnswer1=document .first .question1 .value;
   var currentAnswer2=document .first .question2 .value;
   var currentAnswer3=document .first .question3 .value;

   //var empty=document.getElementById("empty")
   
   if (currentAnswer1=="Javascript"){score++};
   if (currentAnswer2=="Loop"){score++};
   if (currentAnswer3=="Boolean"){score++};
   //first.style.display="none";
   //empty.textContent="score"


   document.write("Your score is;"+score)


}