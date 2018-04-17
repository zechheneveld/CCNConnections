console.log("Client loaded");

let addedNumbers = [];

// $(document).ready(function () {
//     $("#btnAdd").on("click", function (e) {
//         e.preventDefault();
//         // req.flash('success_msg', 'Contact added');
//         console.log("clicked");
//         addContact();
//     });
// });
// function addContact(){
//     addedNumbers.push("1"+$("#txtClient1").val());
//     console.log(addedNumbers);
//
//     // $.ajax({
//     //     type: "POST",
//     //     url: "/sampleForZech",
//     //     data: addedNumbers,
//     //     success: function(responseFromServer){
//     //         console.log(responseFromServer);
//     //     }
//     // });
//
//     // req.flash('success', 'Contact added')
//
//
// }

$(document).ready(function () {
    $("#btnAdd").on("click", function (e) {
        e.preventDefault();

        addedNumbers.push("1"+$("#txtClient1").val());
        console.log(addedNumbers);
        $("#txtClient1").val("")

        $.ajax({
           type: "POST",
           url: "/ccn",
           data: addedNumbers,
           success: function (responseFromServer) {
               console.log(responseFromServer);
           }
        });
    });
});