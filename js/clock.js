	tday=new Array("Sonntag","Montag","Dienstag","Mittwoch","Donnerstag","Freitag","Samstag");
	tmonth=new Array("Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember");
	
	function GetClock(){
	var d=new Date();
	var nday=d.getDay(),nmonth=d.getMonth(),ndate=d.getDate(),nyear=d.getYear();
	if(nyear<1000) nyear+=1900;
	
	document.getElementById('clockbox').innerHTML=""+tday[nday]+", "+ndate+" "+tmonth[nmonth]+", "+nyear+"";
	}
	
	window.onload=function(){
	GetClock();
	setInterval(GetClock,1000);
	}
