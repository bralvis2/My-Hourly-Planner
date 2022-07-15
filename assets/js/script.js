// Curent Date and Time in the header
var currentDay = moment().format('dddd, MMMM Do, h:mm a');
$('#currentDay').text(currentDay);


// Compares current time with the number from each row
function colorIndicator (){
    var currentTime = moment().hour();
    // console.log(typeof currentTime);

// Turns each row of the hourly planner into integers. The split functin separates the string into an array.
$(".time").each(function () {
    var hourRows = parseInt($(this).attr("id"));
    console.log(hourRows, currentTime);

    if (hourRows === currentTime){
        $(this).addClass('present');
    }
    if (hourRows > currentTime){
        $(this).addClass('future');
    }
})

}
colorIndicator();



//function that stores text in the local storage
function saveToDo(){
    var todo8 = $('#todo8').val();
    localStorage.setItem('todo8',todo8);
    console.log(todo8);

    var todo9 = $('#todo9').val();
    localStorage.setItem('todo9',todo9);
    console.log(todo9);

    var todo10 = $('#todo10').val();
    localStorage.setItem('todo10',todo10);
    console.log(todo10);

    var todo11 = $('#todo11').val();
    localStorage.setItem('todo11',todo11);
    console.log(todo11);

    var todo12 = $('#todo12').val();
    localStorage.setItem('todo12',todo12);
    console.log(todo12);

    var todo1 = $('#todo1').val();
    localStorage.setItem('todo1',todo1);
    console.log(todo1);

    var todo2 = $('#todo2').val();
    localStorage.setItem('todo2',todo2);
    console.log(todo2);

    var todo3 = $('#todo3').val();
    localStorage.setItem('todo3',todo3);
    console.log(todo3);

    var todo4 = $('#todo4').val();
    localStorage.setItem('todo4',todo4);
    console.log(todo4);

    var todo5 = $('#todo5').val();
    localStorage.setItem('todo5',todo5);
    console.log(todo5);
}
// Getting Buttons from HTML
var saveButtons = $('.saveBtn');
// Adding on click event to run the funtion to store text in the local storage.
saveButtons.on('click', saveToDo);


//Get Hour and Description from local storage
$("#todo8").val(localStorage.getItem('todo8'));
$("#todo9").val(localStorage.getItem('todo9'));
$("#todo10").val(localStorage.getItem('todo10'));
$("#todo11").val(localStorage.getItem('todo11'));
$("#todo12").val(localStorage.getItem('todo12'));
$("#todo1").val(localStorage.getItem('todo1'));
$("#todo2").val(localStorage.getItem('todo2'));
$("#todo3").val(localStorage.getItem('todo3'));
$("#todo4").val(localStorage.getItem('todo4'));
$("#todo5").val(localStorage.getItem('todo5'));