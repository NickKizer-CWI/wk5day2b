"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
	// displays the saved form values from the users' input.
	$("emailEntered1").innerHTML = sessionStorage.getItem("email_address");
};