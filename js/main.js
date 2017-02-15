$(function() {

  $("div.switch > button").click(function() {
    var button = $("div.switch > button")
    if (button.hasClass('on')){
    button.removeClass("on").addClass("off");
    $('body').removeClass("light").addClass("dark");
    $('.status').empty().append("Hey, who turned the lights off mate?");
  }
    else {
    button.removeClass("off").addClass("on");
    $('body').removeClass("dark").addClass("light");
    $('.status').empty().append("It's so bright in here!");

  }
    // if on turn off
    // else if off turn on
  });



});
