'use strict';
window.$ = require('jquery');
window.jQuery = $;


$(document).ready(function() {
	var $ageInput = $('#ageInput');
	var $button = $('#button');
	var $feedback = $('#feedback');

	$button.on('click', function(e){
		e.preventDefault();
		var $newAge = $ageInput.val();

		$newAge >= 16 ? $feedback.text('you are old enough to legally drive.')
		: $newAge <= 0 ? $feedback.text('please enter a valid age')
		: $feedback.text('you are not old enough to legally drive');;

	})



})




