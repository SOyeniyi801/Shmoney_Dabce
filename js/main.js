$(function(){

  $(".money-container img").click(getValue);
  let sum = 0
  function getValue(){
    let userChoice = $(this).attr('id');
    let value = Number(userChoice)
    sum = sum + value
    console.log(sum.toFixed(2));
    $("#sum").text(sum.toFixed(2));

    let questions = Number($("span").text())
    console.log("compare bank", questions);

    if(questions === sum){
    console.log("Shmoney!");
    } else{

    }





  }

  $(".reset").click(reset);
  function reset(){
    sum=0;
    console.log("reset game");
    $("#sum").text(sum);
  }

});
