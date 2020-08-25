const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
	var date = new Date();
    console.log(date);
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	console.log("HOUR :"+hours + " MINUTE :"+minutes + " SECONDS :"+seconds);
    
    var hourPosition = (hours + (minutes/60) + seconds/(60*60))*360/12;
    var minutePosition = (minutes + (seconds/60)) * 360/60;
    var secondPosition = seconds*360/60;
    
    console.log("HourPosition :"+hourPosition + "Minute Postion :"+minutePosition + "Second Position"+ secondPosition);
    
    HOURHAND.style.transform = "rotate(" + hourPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minutePosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)";
}

var interval = setInterval(runTheClock,1000);