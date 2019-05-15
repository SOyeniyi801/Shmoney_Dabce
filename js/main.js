$(function(){

  $("img").click(getValue);
  let sum = 0
  function getValue(){
    let userChoice = $(this).attr('id');
    let value = Number(userChoice)
    sum = sum + value
    console.log(sum.toFixed(2));
    $("#sum").text(sum.toFixed(2));
  }


});
