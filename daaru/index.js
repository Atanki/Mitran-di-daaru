var n1=0;
$(".question1 input").on("click",function(){
  if($(".question1 input")[0].checked)
  {
    n1+=2;
  }
  else if($(".question1 input")[1].checked)
  {
    n1+=5;
  }
  else {
    n1+=10;
  }
  $(".question2").show("slow","swing");
  $(".question1").hide("slow","swing");
 // $(".question1").addClass("displayof");
});



$(".question2 input").on("click",function(){
  if($(".question2 input")[0].checked)
  {

    n1+=2;

  }
  else if($(".question2 input")[1].checked)
  {

    n1+=5;

  }
  else {

    n1+=10;

  }
  $(".question3").show("slow","swing");
$(".question2").hide("slow","swing");
  $(".question2").fadeOut(slow);


});


$(".question3 input").on("click",function(){
  if($(".question3 input")[0].checked)
  {

    n1+=2;

  }
  else if($(".question3 input")[1].checked)
  {

    n1+=5;

  }
  else {

    n1+=10;

  }
  $(".question4").show("slow","swing");

$(".question3").hide("slow","swing");
  $(".question3").fadeOut(slow);


});

$(".question4 input").on("click",function(){
  if($(".question4 input")[0].checked)
  {

    n1+=2;

  }
  else if($(".question4 input")[1].checked)
  {

    n1+=5;

  }
  else {

    n1+=10;

  }
  $(".question5").show("slow","swing");

$(".question4").hide("slow","swing");
  $(".question4").fadeOut(slow);



});

$(".question5 input").on("click",function(){
  if($(".question5 input")[0].checked)
  {

    n1+=2;

  }
  else if($(".question5 input")[1].checked)
  {

    n1+=5;

  }
  else {

    n1+=10;

  }
    $(".question6").show("slow","swing");
$(".question5").hide("slow","swing");
    $(".question5").fadeOut(slow);
});

$(".question6 input").on("click",function(){
  if($(".question6 input")[0].checked)
  {

    n1+=2;

  }
  else if($(".question6 input")[1].checked)
  {

    n1+=5;

  }
  else {

    n1+=10;

  }
    result(n1);
  $(".Output h1").html(n1);
  $(".mainbody").addClass("displayof");
  $(".Output").removeClass("displayof");
    $(".Output1").removeClass("displayof");

$(".question6").hide("slow","swing");
      $(".question6").fadeOut(slow);

});


$(".Output1").on("click",function(){
    $(".Output").addClass("displayof");
      $(".Output1").addClass("displayof");

n1=0;
       $(".mainbody").removeClass("displayof");
      $(".question1").show("slow","swing");



});
function result(n1)
{
  if(n1>=12&&n1<=20)
  {

    document.querySelector(".Output img").setAttribute("src","assets/fruit-beer.jpg");
  }
  else if(n1>=20&&n1<=28)
  {
document.querySelector(".Output img").setAttribute("src","assets/Beer.jpg");
  }
else  if(n1>=28&&n1<=36)
  {
document.querySelector(".Output img").setAttribute("src","assets/Whisky.jpg");
  }
else  if(n1>=36&&n1<=44)
  {
document.querySelector(".Output img").setAttribute("src","assets/vodka.jpeg");
  }
else   if(n1>=44&&n1<=52)
  {
document.querySelector(".Output img").setAttribute("src","assets/Tequilla.jpg");
  }
  else if(n1>=52&&n1<=60)
  {
document.querySelector(".Output img").setAttribute("src","assets/Rum.jpg");
  }

}
