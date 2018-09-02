$(document).ready(function () {

    $('.col-md-4').hover(

        // trigger when on hover
        function () {
            $(this).animate({
                marginTop: "-=1%",
            }, 400);

        },

        // trigger when hover out
        function () {
            $(this).animate({
                marginTop: "0%"
            }, 400);
        }

    );

});