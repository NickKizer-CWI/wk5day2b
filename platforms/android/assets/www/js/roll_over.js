"use strict";
var $ = function(id) { return document.getElementById(id); };

var createRollover = function(imgTag, secondUrl, secondAlt) {   
    //store first image info
    var firstUrl = imgTag.src;
    var firstAlt = imgTag.alt;
    
    //preload second image
    var image = new Image();
    image.src = secondUrl;    
    
    //create event handlers
    var mouseover = function() { 
        imgTag.src = secondUrl; 
        imgTag.alt = secondAlt;
    };
    var mouseout = function() { 
        imgTag.src = firstUrl; 
        imgTag.alt = firstAlt;
    };
    
    //attach event handlers 
    evt.attach(imgTag, "mouseover", mouseover);
    evt.attach(imgTag, "mouseout", mouseout);
};

window.onload = function() {
    createRollover($("img1"), "images/roll_one_cookie.jpg", "One Cookie");
    createRollover($("img2"), "images/roll_two_cookie.jpg", "Two Cookies");	
};
