$(function(){
      $("#landing-subtyped").typed({
        strings: ["<span class='accent'>tinker</span>.", 
        "<span class='accent'>share what I know</span>.",
         "<span class='accent'>learn new things</span>.",
         "<span class='accent'>code</span>.",
         "<span class='accent'>communicate</span>."],
        typeSpeed: 20,
        loop: true,
        backDelay: 2000,
        backSpeed: 0,
        cursorChar: "&block;"
      });
});

$('a').on('click', function(event) {
    var target = $($(this).attr('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});