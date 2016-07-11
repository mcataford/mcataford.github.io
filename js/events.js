$(document).ready(function() {
    $('#landing-wrapper button').click(function() {
        $('html,body').animate({
                scrollTop: $('#skills-wrapper').offset().top,
            },1000);
    });

    $('#nav-arrow-up').click(function() {
                $('html, body').animate({
                    scrollTop: Math.ceil(($(window).scrollTop() - $(window).height())/$(window).height())*$(window).height()
                }, 800)
    });

    $('#nav-arrow-down').click(function() {
                $('html, body').animate({
                    scrollTop: Math.floor(($(window).scrollTop() + $(window).height())/$(window).height())*$(window).height()
                }, 800)
    });

    $(window).scroll(function() {
        if($(window).scrollTop() > $(window).height() / 2) {
            $('#nav-arrow-down').fadeIn();
        } else {
            $('#nav-arrow-down').fadeOut();
        }

        if($(window).scrollTop() > $(window).height() * 0.97) {
            $('#nav-arrow-up').fadeIn();
        } else {
            $('#nav-arrow-up').fadeOut();
        }

        if($(window).scrollTop() >= $(document).height() - $(window).height()) {
            $('#nav-arrow-down').fadeOut();
        }
    });
});
