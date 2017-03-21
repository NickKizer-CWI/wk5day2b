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


var $ = function(id) { return document.getElementById(id); };

window.onload = function() { 
	  
     var slides = [
        {href:"images/bakery.jpg", title:"Fishing Gear"}, 
        {href:"images/slide_bread.jpg", title:"Bush Plane"},
        {href:"images/slide_cookies.jpg", title:"Catch and Release"},
        {href:"images/slide_cake.jpg", title:"Streamside Lunch"},
        {href:"images/slide_baker.jpg", title:"Day's End"}
    ];
    slideshow.loadImages(slides).startSlideShow($("image"), $("caption"));
    
    evt.attach($("play_pause"), "click", slideshow.togglePlay); 
    evt.attach($("change_speed"), "click", slideshow.changeSpeed); 
	
	sivamtime();
};