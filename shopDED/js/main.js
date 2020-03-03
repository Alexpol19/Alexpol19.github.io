$(function(){
  // show category content
  $('body').on('click', '.category', function(){
    let dataCategoryId=$(this).parents('li').attr('data-category-id');
    $('.main').each(function(){
      if($(this).attr('data-category-id')==dataCategoryId){
        $('.main').hide();
        $(this).show();
      }
    })
  });
  // getProduct in the Basket
  $('body').on('click', '.in-basket', function(){
    let productName=$(this).parents('.card').find('.card-title').html();
    let link=$(this).parents('.card').find('img').attr('src');
    let price=Number($(this).parents('.card').find('.price span').html());
    let dataProductId=$(this).parents('.card').attr('data-product-id');
    let dataCategoryId=$(this).parents('.card').attr('data-category-id');

    $('#Basket').find('tbody').each(function(){
      $(this).append('<tr>'+
                        '<th scope="row" data-product-id="'+dataProductId+'" data-category-id="'+dataCategoryId+'">'+dataProductId+'</th>'+
                        '<td>'+productName+'</td>'+
                        '<td><img src="'+link+'" class="img-fluid" alt="..." data-toggle="modal" data-target="#showImages"></td>'+
                        '<td class="price-basket">'+price+'</td>'+
                        '<td class="count"><input type="number" class="form-control" value="1" min="0"></td>'+
                        '<td>'+
                            '<button type="button" class="close">'+
                                '<span aria-hidden="true">&times;</span>'+
                            '</button>'+
                        '</td>'+
                      '</tr>')
    });

    amountBasket();
    calcSumm();
  });
  // delete product in the basket
  $('body').find('#Basket tr').on('click', '.close', function(){
    $(this).parents('tr').remove();
    amountBasket();
    calcSumm();
  });
  // clear Basket
  $('body').on('click', '.clear-basket', function(){
    $('#Basket').find('table tbody').find('tr').each(function(){
      $(this).remove();
      amountBasket();
      calcSumm();
    })
  })
  // change value in the count in the Basket
  $('body').find('#Basket ').find('.count input').on('keyup input', function(){
    amountBasket();
    calcSumm();
  });

  // amount products in the basket
  function amountBasket(){
    let count=0;
    $('#Basket tbody').find('tr').each(function(){
      count=count+Number($(this).find('.count input').val());
    });
    $('body').find('.shop-btn span').html(count);
  }

  // function calculate summ in the Basket
  function calcSumm(){
    summ=0;
    $('#Basket tbody').find('tr').each(function(){
      let count=Number($(this).find('.count input').val());
      if(count <= 0){
        $(this).find('.count input').addClass('no-value')
      }else{
        $(this).find('.count input').removeClass('no-value')
      }
      let price=Number($(this).find('.price-basket').html());
      summ=summ+count*price;
    });
    $('body').find('#Basket .all-price').html(summ)
  }
  

  // create new Main Category
  $('body').on('click', '.create-new-main-categ', function(){
    $('body').find('.main-categ').show();
    $('body').find('.main-categ-btn').show();
  })
  // Create new Sub Categ
  $('body ul').on('click', '.new-categ', function(){
    $(this).parents('li').find('.new-categ-li').show();
    $(this).parents('li').find('.create-new-categ-btn').show();
    openSubcateg($(this));
  });

  // click on Category Name
  $('body').on('click', '.category', function(){
    openSubcateg($(this));
  });

  // function open Sublist of Categories
 function openSubcateg(elem){
  //  console.log($(this).parents('li').find('.subcategs a').html())
  elem.parents('li').find('.subcategs').toggle();
 }


  //  Add new Product
  // radio check imagelocation
  $('body').on('change', '#image-location1', function(){
    $('body').find('.from-pc').show();
    $('body').find('.from-internet').hide();
  })
  $('body').on('change', '#image-location2', function(){
    $('body').find('.from-pc').hide();
    $('body').find('.from-internet').show();
  });

  // if i put image from internet
  $('body').on('keyup input', '#link-image-internet', function(){
    let link=$(this).val();
    $('body').find('.image-preview').show();
    $('body').find('.image-preview img').attr('src', link)
  });

  // Delete Modal
  $('body').on('click', '.delete-elem', function(){
    let dataProductId=$(this).attr('data-product-id');
    let dataCategoryId=$(this).attr('data-category-id');
    // if not product-id then delete category
    if(dataProductId){ // delete Product
      let text=$(this).parents('.card').find('h5').html();
      $('#deleteModal').find('.product-name').html(text);
      $('#deleteModal').find('.confirm-delete').attr('data-product-id', dataProductId);
      $('#deleteModal').find('.confirm-delete').attr('data-category-id', dataCategoryId);
    } else{ //Delete Categroy
      let text=$(this).parents('.main-header').find('h2').html();
      $('#deleteModal').find('.product-name').html(text);
      $('#deleteModal').find('.confirm-delete').attr('data-product-id', '');
      $('#deleteModal').find('.confirm-delete').attr('data-category-id', dataCategoryId);
    }
  });

  // Slider Modal
  // clear Sliders
  $('body').find('.card .card-img-top').on('click', function(){
    let countImages=0
    $(this).parents('.card-deck').find('.card').each(function(i){
      countImages = i;
      $(this).parents('.card').attr('data-carousel', 'carousel-item');
    });
    // indicate clecked product
    let clicked=$(this).parents('.card').attr('data-carousel');
    $(this).parents('.card').attr('data-carousel', clicked+' active');

    if(countImages == 0){// put image-active-clicked
      let productName=$(this).parents('.card').find('.card-title').html();
      let link=$(this).attr('src');
      let price=Number($(this).parents('.card').find('.price span').html());
      let dataProductId=$(this).parents('.card').attr('data-product-id');
      let dataCategoryId=$(this).parents('.card').attr('data-category-id');
      
      
      $('#showImages').find('.carousel-item.active').find('img').attr('src', link);
      $('#showImages').find('.carousel-item.active').find('.product-name').html(productName);
      $('#showImages').find('.carousel-item.active').find('.price span').html(price);
      $('#showImages').find('.carousel-item.active').find('.in-basket').attr('data-product-id', dataProductId);
      $('#showImages').find('.carousel-item.active').find('.in-basket').attr('data-category-id', dataCategoryId);
    }else{
      let allProducts={};
      
      $(this).parents('.card-deck').find('.card').each(function(i){
        let productName=$(this).find('.card-title').html();
        let dataCarousel=$(this).attr('data-carousel');
        let link=$(this).find('.card-img-top').attr('src');
        let price=Number($(this).find('.price span').html());
        let dataProductId=$(this).attr('data-product-id');
        let dataCategoryId=$(this).attr('data-category-id');

        
        allProducts[i]='<div class="'+dataCarousel+'">'+
                          '<img class="d-block img-fluid w-100"  src="'+link+'" alt="Третий слайд" >'+
                          '<div class="carousel-caption ">'+
                              '<h4 class="product-name">'+productName+'</h4>'+
                              '<p class="price mt-2"><span>'+price+'</span> Леев</p>'+
                              '<button class="btn bg-success text-white in-basket mt-2" data-category-id="'+dataCategoryId+'" data-product-id="'+dataProductId+'">В корзину</button>'+
                          '</div>'+
                        '</div>'
       });
       let allSliders='';
       for(i=0;i<=countImages;i++){
         allSliders=allSliders+allProducts[i];
       }
        $('#showImages').find('.carousel-inner').html(allSliders);

    }
    
  })

});
// browse images and put link into image-preview
function getName (str){
  if (str.lastIndexOf('\\')){
      var i = str.lastIndexOf('\\')+1;
  }
  else{
      var i = str.lastIndexOf('/')+1;
  }
  var filename = str.slice(i);
  var uploaded = document.getElementById("fileformlabel");
  uploaded.innerHTML = filename;
  
  let link='img/products/'+filename;
  $('body').find('.image-preview').show();
  $('body').find('.image-preview img').attr('src', link)
}