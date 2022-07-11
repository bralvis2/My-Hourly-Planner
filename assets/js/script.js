// Variables from HTML
var todoDescription = $('.todo');
var rowEl = $('.time');
var saveButtons = $('.saveBtn');


// Curent Date and Time in the header
var currentDay = moment().format('dddd, MMMM Do, h:mm a');
$('#currentDay').text(currentDay);

//Current Time
var currentTime = moment().hour();

//Assigns red color to the TO Do column of the current hour. 
function present(){
    todoDescription.addClass('present');
}

// Assigns green color to the To Do column if the time is in the future. Military Time
function future(){
todoDescription.addClass('future');
}

// Turns each row of the hourly planner into integers. The split functin separates the string into an array.




// Compare the time from the rows in HTML to the current time. Add and remove classes accrodingly
if (rowEl = currentTime){
    present();
}
else if (rowEl > currentTime){
    future();
}


//Add an on click event to the saved buttons to store to-do's in local storage
    //Module 5 - Activity 10
function saveToDo(){
    localStorage.setItem(rowEl, todoDescription);
}

saveButtons.on('click', save);