"use strict";

function sivamtime() {
		  now=new Date();
		  hour=now.getHours();
		  min=now.getMinutes();
		  sec=now.getSeconds();
		
		if (min<=9) { min="0"+min; }
		if (sec<=9) { sec="0"+sec; }
		if (hour>12) { hour=hour-12; add="pm"; }
		else { hour=hour; add="am"; }
		if (hour==12) { add="pm"; }
		
		time = ((hour<=9) ? "0"+hour : hour) + ":" + min + ":" + sec + " " + add;
		
		if (document.getElementById) { document.getElementById('theTime').innerHTML = time; }
		else if (document.layers) {
		 document.layers.theTime.document.write(time);
		 document.layers.theTime.document.close(); }
		
		setTimeout("sivamtime()", 1000);
		}

var $ = function(id) {
    return document.getElementById(id);
};
var joinList = function() {
    var emailAddress1 = $("email_address1").value;
    var emailAddress2 = $("email_address2").value;
    var firstName = $("first_name").value;
    var isValid = true;

    // validate the first entry
    if (emailAddress1 === "") { 
        $("email_address1_error").firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        $("email_address1_error").firstChild.nodeValue = "";
    } 

    // validate the second entry
    if (emailAddress2 === "") { 
        $("email_address2_error").firstChild.nodeValue = 
            "This field is required.";
        isValid = false; 
    } else if (emailAddress1 !== emailAddress2) { 
        $("email_address2_error").firstChild.nodeValue = 
            "This entry must equal first entry.";
        isValid = false;
    } else {
        $("email_address2_error").firstChild.nodeValue = "";
    }

    // validate the third entry  
    if (firstName === "") {
        $("first_name_error").firstChild.nodeValue = 
            "This field is required.";
        isValid = false;
    } else {
        $("first_name_error").firstChild.nodeValue = "";
    }  

    // submit the form if all entries are valid
    if (isValid) {
		sessionStorage.setItem("name", firstName);
		sessionStorage.setItem("email", emailAddress1);
        $("email_form").submit(); 
    }
};

window.onload = function() {
    $("join_list").onclick = joinList;
    $("email_address1").focus();
	
	sivamtime();
};
