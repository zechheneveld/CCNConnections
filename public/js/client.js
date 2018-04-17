console.log("Client loaded");

$(document).ready(function () {

    $("#btnAdd").on("click", function (e) {
        e.preventDefault();

           var addedNumbers = {
             number: "1"+$("#txtClient1").val()
         };
        $("#txtClient1").val("");

        $.ajax({
            type: "POST",
            url: "/ccn",
            data: addedNumbers,
            success: function(responseFromServer){
                console.log(responseFromServer);
            }
        });
        console.log(addedNumbers)
    });
    // $("#messageSend").on("click", function (e) {
    //     e.preventDefault();
    //
    //     var messages = {
    //         message: $("#form_message").val()
    //     };
    //     $.ajax({
    //         type: "POST",
    //         url: "/ccn",
    //         data: messages,
    //         success: function(Message){
    //             console.log(Message);
    //         }
    //     });
    //     console.log(messages)
    // });
});
