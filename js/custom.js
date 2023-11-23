$(function(){
    $(".tab_current").slick({
        slidesToShow:5,
        slidesToScroll: 5,
        arrows: false,
   
    });


    $('.tab_btn li a').on('click', function (e) {
        e.preventDefault();
        const idx = $(this).parent().index();
        console.log(idx);
        $('.tab_content li').removeClass('on');
        $('.tab_content li').eq(idx).addClass('on');
    });


    let tabBtn = $(".tab_btn>li");  
        tabBtn.click(function(){
        const index = $(this).index();  
        $(this).addClass("on").siblings().removeClass("on");  
    });


    $('.tab_content .arrows .left').on('click', function () {
        $('.tab_current').slick('slickPrev');
    });
    $('.tab_content .arrows .right').on('click', function () {
        $('.tab_current').slick('slickNext');
    });
    
});