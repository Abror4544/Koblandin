
$(function () {

    let PaddingCalc = function () {
        let needHeight = $('.topestContent').outerHeight();
        $('.header').css({ 'padding-top': `${needHeight}px` });
    }

    PaddingCalc();

    let PaddingCalcSection = function () {
        let needHeight = $('#solves').outerHeight();
        let needHeight1 = $('.hex').outerHeight();
        let needHeight2 = $('.nanoBlocks').outerHeight();
        let needHeight3 = $('.bgblock').outerHeight();
        $('section.four').css({ 'margin-top': `${needHeight + needHeight1 + needHeight2 + needHeight3}px` });
    }

    PaddingCalcSection();
    $('.consultOpen').click(() => {
        $('.consult').css('display', 'flex');
    })

    $('.consult .closeForm').click(() => {
        $('.consult').css('display', 'none');
    })

    $('.call_order').click(() => {
        $('.callOrder').css('display', 'flex');
    })

    $('.callOrder .closeForm').click(() => {
        $('.callOrder').css('display', 'none');
    })

    $('.menu_btn_bars').click(function () {
        $('.menu_ul').css('transform', 'translateX(0%)');
    })

    $('.menu_btn_close').click(function () {
        $('.menu_ul').css('transform', 'translateX(-100%)');
    })

    let link = $('.menu_link');
    link.on('click', function (e) {
        e.preventDefault();
        let selector = $(this).addClass('active').attr('href');
        let target = $(selector);
        $('html, body').animate({ scrollTop: target.offset().top - 120 }, 1000);
    })


    var portfolio = new Swiper(".portfolio", {
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            320: {
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3
            },
            1000: {
                slidesPerView: 4,
                slidesPerGroup: 4
            },
            1360: {
                slidesPerView: 6,
                slidesPerGroup: 6
            }
        }
    });

    var reviews = new Swiper(".reviews", {
        spaceBetween: 30,
        pagination: {
            el: ".reviews-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".reviews-next",
            prevEl: ".reviews-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            320: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            }
        }
    });

    var specialists = new Swiper(".specialists", {
        spaceBetween: 30,
        freeMode: true,
        pagination: {
            el: ".specialists-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".specialists-next",
            prevEl: ".specialists-prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1
            },
            320: {
                slidesPerView: 2
            },
            768: {
                slidesPerView: 3
            },
            1000: {
                slidesPerView: 4
            }
        }
    });
})