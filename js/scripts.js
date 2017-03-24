/*
Creating an HTML5 enhanced responsive-ready contact form, with custom javascript feature detection
www.toddmotto.com
*/
(function() {

	// Create input element for testing
	var inputs = document.createElement('input');
	
	// Create the supports object
	var supports = {};
	
	supports.autofocus   = 'autofocus' in inputs;
	supports.required    = 'required' in inputs;
	supports.placeholder = 'placeholder' in inputs;

	// Fallback for autofocus attribute
	if(!supports.autofocus) {
		
	}
	
	// Fallback for required attribute
	if(!supports.required) {
		
	}

	// Fallback for placeholder attribute
	if(!supports.placeholder) {
		
	}
	
	// Change text inside send button on submit
	var send = document.getElementById('contact-submit');
	if(send) {
		send.onclick = function () {
			this.innerHTML = '...Sending';
		}
	}

})();


 $("#Designser").click(function () {
     debugger
     $("#rwo_Design").show();
     $("#rwo_UI").hide();
     $("#rwo_Development").hide();
 });

$("#Uieng").click(function () {

    $("#rwo_Design").hide();
    $("#rwo_UI").show();
    $("#rwo_Development").hide();
});
$("#webdev").click(function () {
        
    $("#rwo_Design").hide();
    $("#rwo_UI").hide();
    $("#rwo_Development").show();
});


