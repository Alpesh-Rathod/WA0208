
$(document).ready(function(){

    $('.home-carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false
    });

    $(".popup-youtube").length &&
        $(".popup-youtube").magnificPopup({
            type: "inline",
            midClick: !0,
            contentposition: !0,
            callbacks: {
                open: function () {
                    $(this.content).find("video")[0].play();
                },
                close: function () {
                    $(this.content).find("video")[0].load();
                },
            },
        });

        $('.testimonial-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        });

        $('.project-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        });

        $('.single-carousel').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            dots: false
        });
    

});

