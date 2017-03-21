//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
/* timer */
var $ = function(id) { return document.getElementById(id); };

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

//----------------------------------------------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------------------------------------------
/* change calculator */
function coins(amount) {
     this.quarters = Math.trunc(amount/25);
	 var qRemainder = amount % 25;
	 this.dimes = Math.trunc(qRemainder/10);
	 var dRemainder = qRemainder % 10;
	 this.nickles = Math.trunc(dRemainder/5);
	 this.pennies = dRemainder % 5;
}

function calcChange(){
	var amount = parseInt($("changeAmount").value);
	var numberWorks = true;
	if(amount > 99 || amount < 0){
		alert("Please enter a number between 0 and 99.");
		numberWorks = false;
	}
	if(numberWorks == true){
		var totalChange = new coins(amount);
		alert( "You would get this many Quarters: "+totalChange.quarters+" Dimes: "+totalChange.dimes+" Nickles: "+totalChange.nickles+" Pennies: "+totalChange.pennies);
	}
	
	
}

window.onload = function(){	
	sivamtime();
	$("calculateChange").onclick = calcChange;
}