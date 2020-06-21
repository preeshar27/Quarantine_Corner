	function setDate(){
	
		var printday = "";
		var dt = new Date();


		switch (dt.getDay()){
			case 0:
			printday = printday + ("Sunday, ")
			break;

			case 1:
			printday = printday + ("Monday, ")
			break;
			case 2:
			printday = printday + ("Tuesday, ")
			break;
			case 3:
			printday = printday + ("Wednesday, ")
			break;
			case 4:
			printday = printday + ("Thursday, ")
			break;

			case 5:
			printday = printday + ("Friday, ")
			break;
			case 6:
			printday = printday + ("Saturday");
			break;

		}
		printday = printday + " ";
		switch (dt.getMonth()){
			
		
			case 0:
			printday = printday + ("January ")
			break;

			case 1:
			printday = printday + ("February ")
			break;
			case 2:
			printday = printday + ("March ")
			break;
			case 3:
			printday = printday + ("April ")
			break;
			case 4:
			printday = printday + ("May ")
			break;

			case 5:
			printday = printday + ("June ")
			break;
			case 6:
			printday = printday + ("July ");
			break;
			case 7:
			printday = printday + ("August ")
			break;

			case 8:
			printday = printday + ("September ")
			break;
			case 9:
			printday = printday + ("October ")
			break;
			case 10:
			printday = printday + ("November ")
			break;
			case 11:
			printday = printday + ("December ")
			break;
			

		}

printday = printday + " ";
		
printday = printday + (dt.getDate().toString())
		
var hour = dt.getHours();
var shour = "";
shour = hour.toString();
if (hour<10){
	shour = "0".concat(shour);}
var mins = dt.getMinutes();
var smin = "";
smin = mins.toString();
if (mins<10){
	smin = "0".concat(mins.toString())
}

date = shour.concat(":");
date = date.concat(smin);


document.getElementById("datetime").innerHTML = date;
document.getElementById("day").innerHTML = printday;

		}
document.addEventListener('DOMContentLoaded', function () {

 setInterval(setDate, 1000);
});