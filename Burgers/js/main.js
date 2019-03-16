//        <!--   плавный переход по якорям-->
		//  <!-- переход по ссылке-->
 $(document).ready(function(){
    $("nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
//  <!-- переход по кнопкам-->
$(document).ready(function(){
    $("header").on("click","button", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $(".delivery_service").on("click","button", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $("footer").on("click","button", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

// Увеличение товара в корзине
$(document).ready(function() {
var count = 0;

  $(".update").click(function() {
    count++;
    $("#counter").html(+count);
  }
)
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
HTMLElement = typeof(HTMLElement) != 'undefiend' ? HTMLElement : Element;

HTMLElement.prototype.addClass = function(string) {
  if (!(string instanceof Array)) {
    string = string.split(' ');
  }
  for(var i = 0, len = string.length; i < len; ++i) {
    if (string[i] && !new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)').test(this.className)) {
      this.className = this.className.trim() + ' ' + string[i];
    }
  }
}

HTMLElement.prototype.removeClass = function(string) {
  if (!(string instanceof Array)) {
    string = string.split(' ');
  }
  for(var i = 0, len = string.length; i < len; ++i) {
    this.className = this.className.replace(new RegExp('(\\s+|^)' + string[i] + '(\\s+|$)'), ' ').trim();
  }
}

HTMLElement.prototype.toggleClass = function(string) {
  if (string) {
    if (new RegExp('(\\s+|^)' + string + '(\\s+|$)').test(this.className)) {
      this.className = this.className.replace(new RegExp('(\\s+|^)' + string + '(\\s+|$)'), ' ').trim();
    } else {
      this.className = this.className.trim() + ' ' + string;
    }
  }
}

HTMLElement.prototype.hasClass = function(string) {
  return string && new RegExp('(\\s+|^)' + string + '(\\s+|$)').test(this.className);
}

document.getElementById('icon_burger').onclick = function() {
    this.toggleClass('icon-up');
}

// Открытие, закрытие меню
$(document).ready(function () {
    $('a.butt').click(function () {
        $('ul#desktop_menu').slideToggle('slow');
    });
});
