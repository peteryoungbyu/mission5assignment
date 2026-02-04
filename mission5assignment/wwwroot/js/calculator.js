// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// File: wwwroot/js/calculator.js

$(document).ready(function () {
    $("#btnCalculate").click(function () {
        // 1. Get the values
        var hours = parseFloat($("#txtHours").val());
        // Note: We grab the rate from the input box
        var rate = parseFloat($("#txtRate").val());

        // 2. Validation
        if (isNaN(hours) || hours <= 0) {
            $("#error-message").show();
            $("#txtHours").addClass("is-invalid");
            $("#txtTotal").val("");
        } else {
            $("#error-message").hide();
            $("#txtHours").removeClass("is-invalid");

            var total = hours * rate;

            // 3. Output
            $("#txtTotal").val(total.toFixed(2));
        }
    });
});