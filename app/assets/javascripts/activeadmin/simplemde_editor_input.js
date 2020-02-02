$(document).ready(function () {
    $('.simplemde-editor').each(function () {
        var options = {
	  spellChecker: false
	};
        options = $.extend({}, options, $(this).data('options'));
        new SimpleMDE( { 
			element: $(this).get(0), 
			options: options 
		});
    });
});
