
$(function () {
    // change header on scroll --------------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 70) {
            $(".header").addClass("header-active");
        } else {
            $(".header").removeClass("header-active");
        }
    });

    //  BURGER MENU -------------------------------- //
    $('.burger-btn').on('click', function () {
        $(this).toggleClass('active');
        $('.header__menu').toggleClass('active');
    });
    $('.header__menu').find('li').on('click', function () {
        $('.burger-btn').removeClass('active');
        $('.header__menu').removeClass('active');
    });

    //  LANG MENU -------------------------------- //
    $('.current-lang').on('click', function () {
        $('.dropdown').toggleClass('active');
    });

    // POPUP ---------------------------------------------- //
    $('.popup_btn').on('click', function () {
        var indexPopup = $(this).attr('data-popup');
        $('.popup__window').removeClass('active');
        $('.' + indexPopup).addClass('active');
        return false;
    });
    $('.popup__close').on('click', function () {
        $('.popup__window').removeClass('active');
    });
    $(document).on('click', function (e) {
        if( !$(e.target).closest('.popup__body').length ) {
            $('.popup__window').removeClass('active');
        }
    });

    
    //  product page slider ---------------------------- //
    $('.big-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.small-slider'
    });
    $('.small-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.big-slider',
        focusOnSelect: true,
        arrows: false,
        infinite: true,
        vertical: true,
        responsive: [
            {
                breakpoint: 767.8,
                settings: {
                    slidesToShow: 4,
                    vertical: false,
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 3,
                    vertical: false,
                }
            },
        ]
    });

   
    //  INPUT NUMBER MASK ------------------------ //
    if ($(".phoneinp").length) {
        $('.phoneinp').inputmask({
            "mask": "+38 ( 9 9 9 ) - 9 9 9 - 9 9 - 9 9",
            showMaskOnHover: false,
            showMaskOnFocus: true,
        });
    }

    // FANCYBOX ------------------ //
    Fancybox.bind('[data-fancybox]', {
        contentClick: "iterateZoom",
        Images: {
            Panzoom: {
                maxScale: 2,
            },
        },
    });

    //  AOS  ---------------------------------------- //
    AOS.init({
        disable: 'phone',
        duration: 1000,
        once: true,
    });

});