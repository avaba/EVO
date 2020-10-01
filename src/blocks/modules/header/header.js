$(function () {
    $('.box__link').on('click', function (e) {
        $(this).closest('.box').toggleClass('open');
    });
});