/*
* Typed.js animation for the landing panel.
*/

$(window).ready(function() {
    var period = "<span class='primarytext' style='font-weight:normal'>.</span>";
  	var typedStrings = ["code"+period, "learn new things"+period, "tinker"+period, "communicate"+period, "teach"+period, "solve problems"+period, "get things done"+period];

  	$("#typedWords").typed({
    	strings: typedStrings,
    	typeSpeed:0,
    	backSpeed:0,
    	backDelay: 1500,
    	showCursor: true,
    	cursorChar: "_",
    	loop: true,
    	contentType: 'html'
  	});
});

/*
* Scroll on menu link click
*/
$(".menulink").click(function() {
    var $panel = $(this).attr("id");

    console.log($panel);

    $('html,body').animate({
        scrollTop: $($panel).offset().top},
        'slow');
});

/*
* Closing the contact form popup
*/

$(document).click(function() {
    if($("#contact-popup").is(':visible')) {
      $("#contact-popup").fadeOut("slow");
    }
});