$(function(){
    let windowWidth=document.body.clientWidth;
    if(windowWidth <= 767){
        let sliderElements=[];
        $('.carousel-item').each(function(){
            $(this).find('.categories__item').each(function(i){
                if(i != 0){
                    let sliderElement=`<div class="carousel-item"><div class="row"><div class="col-12 col-md-4 px-0 categories__item">${$(this).html()}</div></div></div>`;
                    sliderElements.push(sliderElement);
                    console.log($(this).html())
                    $(this).remove();
                }
            })
        });
        $('.carousel-inner').append(sliderElements)
    }
});