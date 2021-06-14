
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


    $('.almaty').click(function(){
        $('.mapBlock iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2574.5565625588447!2d73.07826461512755!3d49.813203840956625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424346d75b67509d%3A0xf94180a1fa0351fb!2zMjAx0J3Qnywg0L_RgNC-0YHQvy4g0JHRg9GF0LDRgC3QltGL0YDQsNGDIDIwLCDQmtCw0YDQsNCz0LDQvdC00LAgMTAwMDAwLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1623664656056!5m2!1sru!2s');
    })

    $('.nursultan').click(function(){
        $('.mapBlock iframe').attr('src', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d216.08408863203766!2d76.93655245023069!3d43.22481171444929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836f23994228ab%3A0x491e26b6dfda807e!2z0YPQu9C40YbQsCDQnNCw0YDQutC-0LLQsCA3NSwg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1623664765586!5m2!1sru!2s');
    })


    $('.consultOpen').click(() => {
        $('.consult').css('display', 'flex');
    })

    $('.consult .closeForm').click(() => {
        $('.consult').css('display', 'none');
    })

    $('.consult .close').click(() => {
        $('.consult').css('display', 'none');
    })

    $('.call_order').click(() => {
        $('.callOrder').css('display', 'flex');
    })

    $('.callOrder .closeForm').click(() => {
        $('.callOrder').css('display', 'none');
    })
    $('.callOrder .close').click(() => {
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
