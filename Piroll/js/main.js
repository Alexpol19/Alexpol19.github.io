/*Плавный переход по якорям*/
		//  <!-- переход по ссылке-->
 $(document).ready(function(){
    $("header, footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Кнопка вверх
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
}
});
$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},800);
});
});

// Изменение бургера на стрелку
// Добавил js короткий прямов блок.
//  !!!Значит можно только в блок писать код.
