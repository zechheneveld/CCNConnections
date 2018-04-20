console.log("Client loaded");
var sendNumber1;
var sendMessage1;
var groupSelected;
$(document).ready(function () {
    init();
});
function init() {

    $("#family").on('click', function (e) {
        e.preventDefault();
        groupSelected = "Families";
    });


    $("#volunteer").on('click', function (e) {
        e.preventDefault();
        groupSelected = "Volunteers"
    });



    $("#btnAdd").on("click", function (e) {
        e.preventDefault();

        sendNumber1 = {
            number: $("#txtClient1").val(),
            group: groupSelected
        };

        $("#txtClient1").val("");
        sendNumber();
    });
    $("#messageSend").on("click", function (e) {
        e.preventDefault();

        sendMessage1 = {
            message: $("#form_message").val()
        };

        $("#form_message").val("");
        sendMessage();
    });
}
function sendMessage() {
    $.ajax({
        type: "POST",
        url: "/ccn",
        data: sendMessage1,
        success: function (responseFromServer) {
            console.log(responseFromServer);
        }
    });
    console.log(sendMessage1);

    $.ajax({
        type: "GET",
        url: "/contacts/contact",
        success: function(response){
            // console.log(response);
        }
    });
}

function sendNumber() {
    $.ajax({
        type: "POST",
        url: "/ccn",
        data: sendNumber1,
        success: function (responseFromServer) {
            console.log(responseFromServer);
        }
    });
    console.log(sendNumber1);

    $.ajax({
        type: "GET",
        url: "/contacts/contact",
        success: function (response) {
            // console.log(response);
        }
    });
}