$(function () {
    $('.box__link').on('click', function (e) {
        $(this).closest('.box').toggleClass('open');
    });

    $(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $('.box__hide'); // тут указываем класс элемента
        if (!div.is(e.target)) { // и не по его дочерним элементам
            div.closest('.box').removeClass('open'); // скрываем его
        }
    });
});