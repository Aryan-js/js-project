//import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./class/calculator.js";
import Calendar from "./class/calendar.js";

const calendar = new Calendar();
const calculator = new Calculator();

const root = document.getElementById("root");

// create header element
const calculatorHeader = document.createElement("h1");
calculatorHeader.innerHTML = "Calculator App";
root.appendChild(calculatorHeader);

// create exercise one
const exe1 = document.createElement("p");
const exe2 = document.createElement("p");
const exe3 = document.createElement("p");
const exe4 = document.createElement("p");
// Generate Calculator class object and calculate operation
exe1.innerHTML = "2 + 3 = " + calculator.sum(2, 3);
root.appendChild(exe1);
exe2.innerHTML = "2 * 3 = " + calculator.multi(2, 3);
root.appendChild(exe2);
exe3.innerHTML = "2 / 3 = " + calculator.division(2, 3);
root.appendChild(exe3);
exe4.innerHTML = "2 % 3 = " + calculator.mod(2, 3);
root.appendChild(exe4);

// create header element
const calendarHeader = document.createElement("h1");
calendarHeader.innerHTML = "Calendar App";
root.appendChild(calendarHeader);

// create exercise one
const exe5 = document.createElement("p");
const exe6 = document.createElement("p");
const exe7 = document.createElement("p");
const exe8 = document.createElement("p");
// Generate Calculator class object and calculate operation
exe5.innerHTML = "The date of this moment?" + calendar.now;
root.appendChild(exe5);
exe6.innerHTML = "What date was it 25 days ago?" + calendar.daysGone(25);
root.appendChild(exe6);
exe7.innerHTML = "What year is it now?" + calendar.year();
root.appendChild(exe7);
exe8.innerHTML = "What month is it now?" + calendar.month();
root.appendChild(exe8);
