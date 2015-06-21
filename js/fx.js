//Pageload animations.
$(window).ready(function() {
  $("#header_title").fadeIn(800);
  $("#header_blurb").delay(300).fadeIn(800);
  $("#skillset .section_header").delay(1100).animate({width:"show"},800);
  $("#experience .section_header").delay(1100).animate({width:"show"},800);
  $("#projects .section_header").delay(1100).animate({width:"show"},800);
});

//Expanding sections.
$(".section_header h1").click(function() {
  console.log("Yo");
});


