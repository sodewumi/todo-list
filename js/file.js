$(document).ready(function() {
	// add project section
	var counter = 0
	
	// when add project slides down to reveal add project information
	
	$('input[name="add-button"]').on('click', function() {
		$(this).hide();
		$('.hidden').show(); 
	});

	$('a').click(function() {
		$('.hidden').hide();
		$('input[name="add-button"]').show();
	});

	$('input[name="project-button"]').click(function(e) {
		e.preventDefault();
		var value = $('input[name="project-input"]').val();
		// value.hide();
		$('.projects').append('<li class="project">' + value + '</li>');
		// value.show();
		$('input[name="project-input"]').val('Project Name');

	})


});