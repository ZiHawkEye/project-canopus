$(document).ready(function() {
	//submits for search bar when enter key is pressed
    $('#search').keydown(function(event) {
        if (event.keyCode == 13) {
            this.form.submit();
            return false;
         }
    });
});