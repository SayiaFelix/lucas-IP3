function myButton(){
    var score=0

   if(document.getElementById('correct1').checked)
    {
     score+=10;
    }

    if(document.getElementById('correct2').checked)
    {
     score+=10;
    }

    if(document.getElementById('correct3').checked)
    {
     score+=10;
    }
      document.write("Your score is;" +score)
}