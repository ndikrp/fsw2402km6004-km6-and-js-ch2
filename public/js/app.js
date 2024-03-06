$(document).ready(function () {
    $("#load-btn").prop("disabled", true);

    $("input, select").change(function () {
        if ($("#driver").val() && $("#date").val() && $("#time").val()) {
            $("#load-btn").prop("disabled", false);
        } else {
            $("#load-btn").prop("disabled", true);
        }
    });
});