"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {
	// displays the saved form values from the users' input.
    $("nameEntered1").innerHTML = sessionStorage.getItem("name");
	$("emailEntered1").innerHTML = sessionStorage.getItem("email");
	sessionStorage.removeItem("name");
	sessionStorage.removeItem("email");
};