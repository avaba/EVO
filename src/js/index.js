import $ from 'jquery';
require("jquery-mousewheel");
require("malihu-custom-scrollbar-plugin");
require('fancybox')($);
import "./import/modules";
import "./import/form";
import "./import/select";

$(function () {
    $('.fancybox').fancybox({
        padding: [33, 45, 45, 45],
        tpl: {
            closeBtn: `<div title="Закрыть" class="fancybox-item fancybox-close"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="17.599" height="2.19987" rx="1.09994" transform="matrix(0.707127 -0.707087 0.707127 0.707087 5 17.4434)" fill="#2F3357"/>
            <rect width="17.599" height="2.19987" rx="1.09994" transform="matrix(0.707127 0.707087 -0.707127 0.707087 6.55518 5)" fill="#2F3357"/>
            </svg>
            </div>`
        }
    });

    $('.action-link').fancybox({
        padding: 0,
        closeBtn: false,
        afterLoad: function(){
            $(".fancybox-skin").addClass('fancybox-content-cust');
        }
    });

    $('.close-popupp').on("click", function (e) {
        $.fancybox.close();
    });
});