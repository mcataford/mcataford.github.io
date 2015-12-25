var $contactForm = $('#contactme');

$contactForm.submit(function(e) {
	e.preventDefault();
	$.ajax({
		url: '//formspree.io/c.marcandre@gmail.com',
		method: 'POST',
		data: $(this).serialize(),
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