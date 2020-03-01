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
    $(".question2").show("slow","swing");
$(".question1").hide("slow","swing");

 // $(".question1").addClass("displayof");



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
  $(".question3").show("slow","swing");
$(".question2").hide("slow","swing");
  $(".question2").fadeOut(slow);


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
  $(".question4").show("slow","swing");

$(".question3").hide("slow","swing");
  $(".question3").fadeOut(slow);


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
  $(".question5").show("slow","swing");

$(".question4").hide("slow","swing");
  $(".question4").fadeOut(slow);



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
    $(".question6").show("slow","swing");
$(".question5").hide("slow","swing");
    $(".question5").fadeOut(slow);
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
