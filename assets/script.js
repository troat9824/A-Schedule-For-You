var saveBtn = $(".saveBtn");
var currentHour = moment().format("HH"); // Variable for current hour 
var currentHourInt = parseInt(currentHour); // Parse it so that hour returns as an integer


// date and time
function addDate() { 
    $("#currentDay").html(moment().format('dddd, MMMM Do YYYY, h:mm a'));
} setInterval(addDate, 1000);






$(".row").each(function() {
    var rowHour = $(this).attr("id");
    console.log(currentHourInt, rowHour)
// cheking to see if current hour is past, present, or future
    if(currentHourInt > rowHour){
        $( this ).children("." + rowHour + "hour").addClass("past");  
    } else if(currentHourInt < rowHour){
        $( this).children("." + rowHour + "hour").addClass("future"); 
    
    } else if (currentHourInt === rowHour) {
        $( this).children("." + rowHour + "hour").addClass("present"); 
        
}});

saveBtn.on("click", function () {  

    var row = $(this).attr("id"); // variable referencing the assigned hour row in the html doc 
    var input = $("." + row + "hour").value; // saves the text that has been entered into the input column 
    localStorage.setItem(row, input); //saves input to local storaage
    console.log(localStorage);
});
    
// local storage not working