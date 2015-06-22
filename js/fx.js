//Pageload animations.
$(window).ready(function() {
  $("#main_title").fadeIn(1100);
  $("#main_mugshot").delay(800).fadeIn(1100);
  
  $("#main_menu_skillset .menu_title").delay(1900).fadeIn(800);
  $("#main_menu_experience .menu_title").delay(2200).fadeIn(800);
  $("#main_menu_projects .menu_title").delay(2500).fadeIn(800);

  $("#intro_blurb").delay(3300).fadeIn(1100);
  $("#callmemaybe").delay(3300).fadeIn(1100);
  
//Expanding sections.
  /*$(".section_header").click(function() {
    $(this).parent().find(".contents").toggle();
  });*/
});


