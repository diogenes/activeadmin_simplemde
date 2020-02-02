$(document).ready(function () {
    $('.simplemde-editor').each(function () {
        var options = {
	  element: $(this).get(0)
	};
        options = $.extend({}, options, $(this).data('options'));
        new SimpleMDE(options);
    });
});
