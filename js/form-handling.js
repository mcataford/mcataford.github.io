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
			console.log("Sent.");
		},
		error: function(err) {
			console.log("Failed.");
		}
	});
});