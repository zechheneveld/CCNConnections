console.log("Client loaded");
var SendOver;
$(document).ready(function () {
    init();
});
function init() {
    $("#btnAdd").on("click", function (e) {
        e.preventDefault();
        SendOver = {
            number: "1" + $("#txtClient1").val(),
            message: ""
        };
        $("#txtClient1").val("");
        SendInfo();
    });
    $("#messageSend").on("click", function (e) {
        e.preventDefault();
        SendOver = {
            number: "1",
            message: $("#form_message").val()
        };
        $("#form_message").val("");
        SendInfo();
    });
    function SendInfo() {
        $.ajax({
            type: "POST",
            url: "/ccn",
            data: SendOver,
            success: function (responseFromServer) {
                console.log(responseFromServer);
            }
        });
        console.log(SendOver)
    }
}