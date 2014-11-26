$(document).ready(function() {
	// add project section
	
	// when add project slides down to reveal add project information
	
	$('input[name="add-button"]').on('click', function() {
		$(this).hide();
		$('.hidden').show(); 
	});

	$('a').click(function() {
		$('.hidden').hide();
		$('input[name="add-button"]').show();
	});	
	
	var count = 1;
	$('input[name="project-button"]').click(counter);

	function counter() {
		var value = $('input[name="project-input"]').val();	
		$('.projects').append('<li class="project"  id="'+count+ '">' + value + '</li>');
		$('input[name="project-input"]').val('Project Name');

		return count+=1;
	}


});