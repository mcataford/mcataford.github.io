/*
* Contact form handling using AJAX, sends request to Formspree.io
*/

var $contactForm = $('#contactme');

$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/c.marcandre@gmail.com',
		method: 'POST',
		data: {
			Sender: $("#sender").val(),
			Position: $("#function").val(),
			Email: $("#replyto").val(),
			Details: $("#details").val()
		},
		dataType: 'json',
		beforeSend: function() {
			console.log("Sending.");
		},
		success: function(data) {
			$('#contactme').trigger("reset");
			$("#contact-popup").fadeIn("slow");
		},
		error: function(err) {
			console.log("Failed.");
		}
	});
});