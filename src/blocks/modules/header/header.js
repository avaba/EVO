$(function () {

    $(".box__link").on('click', function () {
        $(this).closest('.box').toggleClass('open');
    });

    $(document).on('click', function (e) {
        if (!$(e.target).closest(".box.open").length) {
            $('.box.open').removeClass('open');
        }
        e.stopPropagation();
    });

    $(".box__hide").on('click', function () {
        $(this).closest('.box').removeClass('open');
    });

    $(".modal-in-link").on('click', function (e) {
        $(".modal-in").addClass("open");
        let ancor = $(this).attr('href')
        $(ancor).addClass("active");
        e.preventDefault();
        return false;
    });

    $(".modal-in__owerlay, .close-popupp").on('click', function () {
        $(".modal-in").removeClass("open");
        $(".modal-in__wrap").removeClass("active");
    });

});