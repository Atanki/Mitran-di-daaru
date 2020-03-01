var n1=0;
$(".question1 input").on("click",function(){

  if($(".question1 input")[0].checked)
  {

    n1+=2;
    console.log(n1);
  }
  else if($(".question1 input")[1].checked)
  {

    n1+=5;
    console.log(n1);
  }
  else {

    n1+=10;
    console.log(n1);
  }
$(".question2").removeClass("displayof");
 $(".question1").slideUp(500);

});

console.log(n1);

$(".question2 input").on("click",function(){
  if($(".question2 input")[0].checked)
  {

    n1+=2;
    console.log(n1);
  }
  else if($(".question2 input")[1].checked)
  {

    n1+=5;
    console.log(n1);
  }
  else {

    n1+=10;
    console.log(n1);
  }
$(".question3").removeClass("displayof");
 $(".question2").slideUp(500);


});


$(".question3 input").on("click",function(){
  if($(".question3 input")[0].checked)
  {

    n1+=2;
    console.log(n1);
  }
  else if($(".question3 input")[1].checked)
  {

    n1+=5;
    console.log(n1);
  }
  else {

    n1+=10;
    console.log(n1);
  }
$(".question4").removeClass("displayof");
 $(".question3").slideUp(500);


});

$(".question4 input").on("click",function(){
  if($(".question4 input")[0].checked)
  {

    n1+=2;
    console.log(n1);
  }
  else if($(".question4 input")[1].checked)
  {

    n1+=5;
    console.log(n1);
  }
  else {

    n1+=10;
    console.log(n1);
  }
$(".question5").removeClass("displayof");
 $(".question4").slideUp(500);



});

$(".question5 input").on("click",function(){
  if($(".question5 input")[0].checked)
  {

    n1+=2;
    console.log(n1);
  }
  else if($(".question5 input")[1].checked)
  {

    n1+=5;
    console.log(n1);
  }
  else {

    n1+=10;
    console.log(n1);
  }
  $(".question6").removeClass("displayof");
  $(".question5").slideUp(500);
});

$(".question6 input").on("click",function(){
  if($(".question6 input")[0].checked)
  {

    n1+=2;
    console.log(n1);
  }
  else if($(".question6 input")[1].checked)
  {

    n1+=5;
    console.log(n1);
  }
  else {

    n1+=10;
    console.log(n1);
  }
  $(".Output h1").html(n1);
  $(".mainbody").addClass("displayof");
  $(".Output").removeClass("displayof");
    $(".Output1").removeClass("displayof");
  $(".question6").slideUp(500);
});


$(".Output1").on("click",function(){
    $(".Output").addClass("displayof");
      $(".Output1").addClass("displayof");
      $(".mainbody").removeClass("displayof");
       


});
