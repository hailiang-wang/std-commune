/**
* handle events in index page
*/

// popup an register dialog
function registerDialog () {
	$('#btnRegister').on('click',function(){
		console.log('user want to register account.');
		$('#dialogRegister').modal('toggle');
	})
}

// set default value in form
function setDefaultValueInForm(){
    // password need to be set specificly
    $('#password').attr('type','text');
	$('#password').focus(function(){
	    $('#password').attr('type','password');
	});
	$('#password').blur(function(){
	    if (this.value == '') {
	        $('#password').attr('type','text');
	    };
	});

	$('.textbox').focus(function(){
    if (this.value == this.defaultValue) {
        this.value = '';
        $(this).removeClass('default');
    };
	});

	$('.textbox').blur(function(){
	    if (this.value == '') {
	        this.value = this.defaultValue;
	        $(this).addClass('default');
	    };
	});
}

$(document).ready(function(){
	setDefaultValueInForm();
	registerDialog();
});