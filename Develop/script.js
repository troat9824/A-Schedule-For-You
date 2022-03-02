var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); // Variable for current hour 
var currentHourInt = parseInt(currentHour); // Parse it so that hour returns as an integer





// Show Date and Time in Header 
$("#currentDay").append();

function addDate() { 
$("#currentDay").html(moment().format('MMMM Do YYYY, h:mm a'));
  
} setInterval(addDate, 1000);


