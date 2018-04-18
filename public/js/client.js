console.log("Client loaded");
var addedNumbers = [];

$(document).ready(function () {
    init();
});

function init() {


    $("#btnAdd").on("click", function (e) {
        e.preventDefault();

        addedNumbers.push("1" + $("#txtClient1").val());

        $("#txtClient1").val("");
    });

    $("#messageSend").on("click", function (e) {
        e.preventDefault();

        var SentOver = {
            number: "1" + $("#txtClient1").val(),
            message: $("#form_message").val()
        };
        $("#txtClient1").val("");

        $.ajax({
            type: "POST",
            url: "/ccn",
            data: SentOver,
            success: function (responseFromServer) {
                console.log(responseFromServer);
            }
        });
        console.log(SentOver)
    });
    // $("#messageSend").on("click", function (e) {
    //     e.preventDefault();

        // var messages = {
        //     message: $("#form_message").val()
        // };
        // $.ajax({
        //     type: "POST",
        //     url: "/ccn",
        //     data: messages,
        //     success: function(Message){
        //         console.log(Message);
        //     }
        // });
        // console.log(messages)
    // });

}