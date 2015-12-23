$(window).ready(function() {
    $('#page').fullpage({
        anchors:["landing","resume","getInTouch"]
    });

    var period = "<span style='color:#727272;font-weight:normal'>.</span>";
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