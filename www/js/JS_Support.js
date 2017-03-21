// -------------------------------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------------------------------

/* displays date on footer of web page */
"use strict";
function date() {
	var today = new Date();
	var dateString = ""
	
	dateString += (today.getMonth() + 1) + "/";
	dateString += today.getDate() + "/";
	dateString += today.getFullYear();
	
	document.getElementById("date").innerHTML = "" + (today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
};