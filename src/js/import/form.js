$(function () {
    $(".error .valid").on("click", function() {
        $(this).closest("label").find('input').val('');
    });
});