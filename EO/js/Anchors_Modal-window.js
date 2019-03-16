//        <!--   плавный переход по якорям-->
 $(document).ready(function(){
    $("header").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("footer").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
                        /*Модальное окно*/
/* плавное открытие модального окна*/
$(".knopka").click(function () {
$("#window").css({display:'block'}).animate({opacity:'1'}, 500)
$("#Back_bg").css({display:'block'})
$("body").css({overflow:'hidden'})
});


/*Плавное закрытие модального окна нажатием вне элемента*/
        jQuery(function($){
	$(document).mouseup(function (e){ // событие клика по веб-документу
		var div = $("#window"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
		    && div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide("#window"); // скрываем его

		}

	});
});

/*Включение overflow для body после закрытя #window*/
$("#Back_bg").click(function () {
$("body").css({overflow:'auto'})
$("#Back_bg").css({display:'none'})
});
                    /*Модальное окно Finish*/
        
/*Событие при прокрутке страницы убирающее header и  всплывающее при наведение или прокрутке до верха. На мобильных устроиствах убрано при наэатие*/
var head = $('body');
  
$(window).scroll(function max_width() {
var y = $(this).scrollTop();
var z = $('body').offset().top;

if (y >= z) {
    $("header").css({top:'-48px'});
    $(".wrapper").css({'margin-top':'5px'});
}
else{
    $("header").css({top:'0px'});
    $(".wrapper").css({'margin-top':'53px'});
}
});
if(document.documentElement.clientWidth < 768) {
    
  
    $(window).scroll(function () {
var y = $(this).scrollTop();
var z = $('body').offset().top;

if (y >= z) {
    $("header").css({top:'-52.9px'});
    $(".wrapper").css({'margin-top':'0.1px'});
}
else{
    $("header").css({top:'0px'});
    $(".wrapper").css({'margin-top':'53px'});
}
});
}    
        
        
$(window).resize(function() {
  if(document.documentElement.clientWidth < 768) {
    $(window).scroll(function () {
var y = $(this).scrollTop();
var z = $('body').offset().top;

if (y >= z) {
    $("header").css({top:'-52.9px'});
    $(".wrapper").css({'margin-top':'0.1px'});
}
else{
    $("header").css({top:'0px'});
    $(".wrapper").css({'margin-top':'53px'});
}
});
  }
else {
    $(window).scroll(function () {
var y = $(this).scrollTop();
var z = $('body').offset().top;

if (y >= z) {
    $("header").css({top:'-48px'});
    $(".wrapper").css({'margin-top':'5px'});
}
else{
    $("header").css({top:'0px'});
    $(".wrapper").css({'margin-top':'53px'});
}
});
}
});
