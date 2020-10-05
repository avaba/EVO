$(function () {

    $(".table-list__head-btn").on("click", function() {
        $(this).closest(".table-list__head").find(".table-list__head-btn").removeClass("active");
        $(this).toggleClass("active");
    });

});