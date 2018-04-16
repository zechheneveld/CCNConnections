// var express = require('express');
// var router = express.Router();

let addedNumbers = [];

$(document).ready(function () {
    $("#btnAdd").on("click", function (e) {
        e.preventDefault();
        // req.flash('success_msg', 'Contact added');
        console.log("clicked");
        addContact();
    });
    $("#txtClient1").val("")
});
function addContact(){
    addedNumbers.push("1"+$("#txtClient1").val());
    console.log(addedNumbers);
}

// module.exports = router;

