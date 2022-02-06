

function myButton(){

  var score=0;
 
 var question1=document .first .question1 .value;
 var question2=document .first .question2 .value;
 var question3=document .first .question3 .value;

 var submitboard= document.getElementById('submitboard');

 if (question1=="Javascript"){score+=30};
 if (question2=="Loop"){score+=30};
 if (question3=="Boolean"){score+=30};

 submitboard.innerHTML=score;
 java.style.display="none";


if (score==3){
   submitboard.innerHTML="Congratulations!! You Have Passed. Your score is " + Math.floor(score/90*100) +"%"+".Excellent!!"
 }
 else if (score==2) {
   submitboard.innerHTML="Congratulations!! You Have Fairly Passed. Your score is " + Math.floor(score/90*100) +"%"+".Average!!"
 } 
 else {
  submitboard.innerHTML="Congratulations!! Unfortunately you have failed. Your score is " + Math.floor(score/90*100) +"%"+".Fail!!!"
}
document.write(Math.floor(score/90*100)+"%");


};

