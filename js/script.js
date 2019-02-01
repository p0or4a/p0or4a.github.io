//mobile content script

$(function() {
    $('.recomend_mobile_click').click(function () {
        $('.recomend_mobile_click').toggleClass('show');
        $('.arrow1').toggleClass('open_arrow');
        $('.slide_holder').slideToggle('fade in');
    });
});

$(document).ready(function ($) {

    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;


        var dropdownlink = this.el.find('.dropdownlink');
        dropdownlink.on('click',
            { el: this.el, multiple: this.multiple },
            this.dropdown);
    };

    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if(!e.data.multiple) {
            $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
        }
    };

    var accordion = new Accordion($('.accordion-menu'), false);

    $('.js-toggle-menu').click(function(e){
        e.preventDefault();
        $(this).toggleClass('open');
        $('.row_mobile').slideToggle("fade in");
    });

    $(function() {      //slider main page
        $('#slider4').slick({
            dots: true,
            arrows: true,
            prevArrow: $('.control_prev4'),
            nextArrow: $('.control_next4'),
            appendDots: $('.dots_holder'),
            dotsClass: $('.dot_icon')
        });
    });

    $(function() {     //mobile slider
        $('#slider').slick({
            arrows: true,
            prevArrow: $('.control_prev'),
            nextArrow: $('.control_next')

        });
    });


        $('#slider2').slick({
            arrows: true,
            prevArrow: $('.control_prev2'),
            nextArrow: $('.control_next2'),
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                }]
        });

    $(function() {      //sidebar slider
        $('#slider3').slick({
            arrows: true,
            prevArrow: $('.control_prev3'),
            nextArrow: $('.control_next3')

        });
    });



    if (document.body.clientWidth < 1024) {

        $('.overflow_holder').slick({
            arrow: false,
            prevArrow: $('.catalog_slider_prev_arrow'),
            nextArrow: $('.catalog_slider_next_arrow'),
        });

            $('.with_this_overflow').slick({
                arrows: true,
                prevArrow: $('.variant_with_this_overflow_arrow_prev'),
                nextArrow: $('.variant_with_this_overflow_arrow_next')
            });
        $('.with_this_overflow_two').slick({
            arrows: true,
            prevArrow: $('.variant_with_this_overflow_two_arrow_prev'),
            nextArrow: $('.variant_with_this_overflow_two_arrow_next')
        });
            $('.row_seven_reason_pic_holder').slick({
                arrows: true,
                prevArrow: $('.reason_arrow_prev'),
                nextArrow: $('.reason_arrow_next'),
                asNavFor: '.row_reason_show_more',
                dots: false,
                infinite: false
            });
            $('.row_reason_show_more').slick({
                asNavFor: '.row_seven_reason_pic_holder',
                dots: false,
                focusOnSelect: true,
                arrows: false,
                infinite: false
            });
            $('.variant_wrap').slick({
                slidesToShow: 1,
                arrows: true,
                prevArrow: $('.variant_wrap_arrow_prev'),
                nextArrow: $('.variant_wrap_arrow_next'),
                dots: false
            });

            $('.variant_wrap_two').slick({
                slidesToShow: 1,
                arrows: true,
                prevArrow: $('.variant_wrap_two_arrow_prev'),
                nextArrow: $('.variant_wrap_two_arrow_next'),
                dots: false
            });

            $('.project_tab_wrap').slick({
                arrows: true,
                prevArrow: $('.variant_project_arrow_prev'),
                nextArrow: $('.variant_project_arrow_next'),
                dots: false
            });

    }

    $('.tabs_holder .mobile_tabs_content:eq(0)').on('click', function () {
       $('.charact_wrap').toggle('0.1s');
       $('.mobile_tabs_arrow:eq(0)').toggleClass('mobile_tabs_arrow_open');
    });
    $('.tabs_holder .mobile_tabs_content:eq(1)').on('click', function () {
        $('.option_inform_holder').toggle('0.1s');
        $('.mobile_tabs_arrow:eq(1)').toggleClass('mobile_tabs_arrow_open');
    });
    $('.tabs_holder .mobile_tabs_content:eq(2)').on('click', function () {
        $('.variant_wrap_for_slide').toggleClass('variant_wrap_show');
        $('.mobile_tabs_arrow:eq(2)').toggleClass('mobile_tabs_arrow_open');
    });
    $('.tabs_holder .mobile_tabs_content:eq(3)').on('click', function () {
        $('.variant_wrap_for_slide_two').toggleClass('variant_wrap_show');
        $('.mobile_tabs_arrow:eq(3)').toggleClass('mobile_tabs_arrow_open');
    });
    $('.tabs_holder .mobile_tabs_content:eq(4)').on('click', function () {
        $('.variant_wrap_for_slide_three').toggleClass('variant_wrap_show');
        $('.mobile_tabs_arrow:eq(4)').toggleClass('mobile_tabs_arrow_open');
    });
    $('.tabs_holder .mobile_tabs_content:eq(5)').on('click', function () {
        $('.talking_wrap').toggle('0.1s');
        $('.mobile_tabs_arrow:eq(5)').toggleClass('mobile_tabs_arrow_open');
    });
    $(".overlay_slide_full").height( $(document).height() );
    $(".overlay_call_me_wrap").height( $(document).height() );
    $(".overlay_cheap_wrap").height( $(document).height() );
    $(".overlay_recall_me_wrap").height( $(document).height() );


    $('.smart_button').on('mouseover', function() {
        $('.smart_button_hover').css({
            visibility: 'visible',
            opacity:1,
            transition: '0.4s'
        });
    });
    $('.smart_button').on('click', function() {
        $('.smart_button_hover').css({
            visibility: 'hidden',
            opacity:0
        });
    });

    $('.all_generators_show_more_holder').click(function () {
        $('.fast_sort_holder_catalog').toggle('fade in');
        $('.all_generators_show_more_arrow').toggleClass('open_arrow_orange');
    });


    $('.mobile_text_name_close_button').click(function () {
        $('.mobile_filter_wrap').toggle('fade in');
    });

    $('.mobile_filter').click(function () {
        $('.mobile_filter_wrap').toggle('fade in');
    });


    $('.smart_button').click(function () {
        $('.sort_wrap').toggle('fade in');
    });

    $('.close_button').click(function () {
        $('.sort_wrap').toggle('fade in');
    });

    $('.close_link').click(function () {
        $('.sort_wrap').toggle('fade in');
    });

    $('.scroll_link').click(function() {
        $('html, body').animate({scrollTop: 0},600);
        return false;
    });
    // catalog script

    $('.check_all').click(function () {
        $('.column_holder input[type=checkbox]').prop('checked', true);
    });

    $('.reset_all').click(function () {
        $('.column_holder input[type=checkbox]').prop('checked', false);
    });

    // option select script

    var x, i, j, selElmnt, a, b, c;
    x = document.getElementsByClassName("custom-select");
    for (i = 0; i < x.length; i++) {
        selElmnt = x[i].getElementsByTagName("select")[0];
        a = document.createElement("DIV");
        a.setAttribute("class", "select-selected");
        a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
        x[i].appendChild(a);
        b = document.createElement("DIV");
        b.setAttribute("class", "select-items select-hide");
        for (j = 0; j < selElmnt.length; j++) {
            c = document.createElement("DIV");
            c.innerHTML = selElmnt.options[j].innerHTML;
            c.addEventListener("click", function(e) {
                var y, i, k, s, h;
                s = this.parentNode.parentNode.getElementsByTagName("select")[0];
                h = this.parentNode.previousSibling;
                for (i = 0; i < s.length; i++) {
                    if (s.options[i].innerHTML == this.innerHTML) {
                        s.selectedIndex = i;
                        h.innerHTML = this.innerHTML;
                        y = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < y.length; k++) {
                            y[k].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                h.click();
            });
            b.appendChild(c);
        }
        x[i].appendChild(b);
        a.addEventListener("click", function(e) {
            e.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    function closeAllSelect(elmnt) {
        var x, y, i, arrNo = [];
        x = document.getElementsByClassName("select-items");
        y = document.getElementsByClassName("select-selected");
        for (i = 0; i < y.length; i++) {
            if (elmnt == y[i]) {
                arrNo.push(i)
            } else {
                y[i].classList.remove("select-arrow-active");
            }
        }
        for (i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add("select-hide");
            }
        }
    }
    document.addEventListener("click", closeAllSelect);



    // gallery change


    $('.button1').on('click', function() {
        $('.cart_seller_gallery_three').css({
            display: 'none'
        });
        // $('.button3').css({
        //     background: 'url(img_catalog/button3.png)'
        // });
        $('.cart_seller_gallery').css({
            display: 'block'
        });
        // $('.button1').css({
        //     background: 'url(img_catalog/button1a.png)'
        // });
        $('.cart_seller_gallery_two').css({
            display: 'none'
        });
        // $('.button2').css({
        //     background: 'url(img_catalog/button2.png)'
        // });
    });

    $('.button2').on('click', function() {
        $('.cart_seller_gallery_three').css({
            display: 'none'
        });
        // $('.button3').css({
        //     background: 'url(img_catalog/button3.png)'
        // });
        $('.cart_seller_gallery').css({
            display: 'none'
        });
        // $('.button1').css({
        //     background: 'url(img_catalog/button1.png)'
        // });
        $('.cart_seller_gallery_two').css({
            display: 'block'
        });
        // $('.button2').css({
        //     background: 'url(img_catalog/button2a.png)'
        // });
    });

    $('.button3').on('click', function() {
        $('.cart_seller_gallery_three').css({
            display: 'block'
        });
        // $('.button1').css({
        //     background: 'url(img_catalog/button1.png)'
        // });
        $('.cart_seller_gallery').css({
            display: 'none'
        });
        // $('.button2').css({
        //     background: 'url(img_catalog/button2.png)'
        // });
        $('.cart_seller_gallery_two').css({
            display: 'none'
        });
        // $('.button3').css({
        //     background: 'url(img_catalog/button3a.png)'
        // });
    });

    $('.cart_item_orange_link').on('click', function() {
        $('.cart_item_hover_text').toggle();
        $('.orange_arrow_one').toggleClass('orange_arrow_open')

    });

    $('.cart_item_orange_link_2').on('click', function() {
        $('.cart_item_hover_pic').toggle();
        $('.orange_arrow_two').toggleClass('orange_arrow_open')

    });


    $(function() {
        $('.slider_item_sell').slick({
            arrows: true,
            prevArrow: $('.control_item_prev'),
            nextArrow: $('.control_item_next'),
            dots: false
        });
        $('.row_nav_for_slider').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.slider_item_sell',
            dots: false,
            focusOnSelect: true,
            arrows: false,
            infinite: true
        });

        $('.overlay_full_slide').slick({
            slidesToShow: 1,
            arrows: true,
            prevArrow: $('.control_full_prev'),
            nextArrow: $('.control_full_next'),
            dots: false
        });
    });


    $('.overlay_close_button').on('click', function() {
        $('.overlay_slide_full').toggleClass('full_slide_show');
    });

    $('.overlay_slide_icon').on('click', function() {
        $('.overlay_slide_full').toggleClass('full_slide_show');
    });

    $('.overlay_call_me_close_button').on('click', function () {
        $('.overlay_call_me_wrap').toggle()
    });
    $('.overlay_submit_button').on('click', function () {
        $('.overlay_call_me_wrap').toggle()
    });
    $('.buy_holder_violet_button').on('click', function () {
        $('.overlay_call_me_wrap').toggle()
    });
    $('.overlay_call_me_close_button_two').on('click', function () {
        $('.overlay_cheap_wrap').toggle()
    });
    $('.overlay_submit_button_two').on('click', function () {
        $('.overlay_cheap_wrap').toggle()
    });
    $('.buy_holder_dashed_button').on('click', function () {
        $('.overlay_cheap_wrap').toggle()
    });
    $('.overlay_call_me_close_button_three').on('click', function () {
        $('.overlay_recall_me_wrap').toggle()
    });
    $('.overlay_submit_button_three').on('click', function () {
        $('.overlay_recall_me_wrap').toggle()
    });
    $('.menu_wrap_call_me').on('click', function () {
        $('.overlay_recall_me_wrap').toggle()
    });
    $('.mobile_phone').on('click', function () {
        $('.overlay_recall_me_wrap').toggle()
    });

    $(function() {
        $("ul.tabs_row_holder").on("click", "li:not(.active_tab)", function() {
            $(this)
                .addClass("active_tab")
                .siblings()
                .removeClass("active_tab")
                .closest("div.tabs_holder")
                .find("div.tabs__content")
                .removeClass("active")
                .eq($(this).index())
                .addClass("active");
        });
    });
    $(function() {
        $(".row_seven_reason_pic_holder").on("mouseover", 'div.seven_reason_pic_holder' , function() {
            $(this)
                .closest("div.row_seven_reason_holder")
                .find("div.rectangle")
                .removeClass("rectangle_active")
                .eq($(this).index())
                .addClass("rectangle_active");
        });
    });


});

$(window).scroll(function(){
    if($(window).scrollTop()>500){
        $('.scroll_link').fadeIn("slow");
    }
    else{
        $('.scroll_link').fadeOut("slow");
    }
});

