$(function () {
    function readURL(input) {

        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('#image').attr('src', e.target.result);
                $('.avatar__upload-bg').addClass('active')
            };

            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInput").on("change", function () {
        readURL(this);
    });
});