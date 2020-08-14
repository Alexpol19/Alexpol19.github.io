$(function(){
    $('body').on('click', '.offices__office a', function(){
        $('.offices__office').removeClass('active');
        $(this).parents('.offices__office').addClass('active');
    });
});