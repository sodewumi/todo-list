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

	//counts the amount of clicks and assaigns new projects
	var count = 1;
	$('input[name="project-button"]').click(counter);

	function counter() {
		//gets value entered and makes a new project
		var value = $('input[name="project-input"]').val();	
		$('.projects').append('<li class="project"  id="'+count+ '">' + value + '</li>');
		$('input[name="project-input"]').val('Project Name');

		return count+=1;
	};




	$('input[name="task-input"]').keypress(function(e) {
		if (e.keyCode == 13) {
			var value = $('input[name="task-input"]').val();
			$('.tasks').append('<li class="task"><span class="delete">&#x2717</span> <span class="check">&#x2714</span><span class="middle"> '+value+' </li>')
			$('input[name="task-input"]').val('Add a new task and press enter');

		}
	});	

	//delete placeholder
	$('input[name="project-input"]').click(function() {
		$('input[name="project-input"]').val('');
	});	

	$('input[name="task-input"]').click(function() {
		$('input[name="task-input"]').val('');
	});	

	//delete tasks and check
	$('.tasks').on('click', '.delete', function(e){
		e.preventDefault(); 
		$(this).closest('li').remove();
	});

	$('.tasks').on('click', '.check', function(e){
		e.preventDefault(); 
		$(this).closest('li').remove();
	});

});