// slidet на js без объектов
// массив src для img
var images=[];
// добавление новых элментов в массив
images.push('https://cdn.humoraf.ru/wp-content/uploads/2017/08/23-14.jpg');
images.push('https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg');
images.push('https://mirpozitiva.ru/uploads/posts/2017-04/medium/1492620921_06.jpg');
images.push('https://klike.net/uploads/posts/2019-03/1551516106_1.jpg');
images.push('https://i.pinimg.com/736x/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg');


// обращаемся к кнопкам и img 
var bLeft=document.getElementById('left');
var bRight=document.getElementById('right');
var IMG=document.getElementById('IMG');
// переменная для переключения элемента
var i=0;

// первый элемент при загрузке страницы
IMG.src=images[i];

// добавляем вызов функции по клику
bLeft.addEventListener('click', PrevImg);
bRight.addEventListener('click', NextImg);



// предидущий
function PrevImg(){
   if(i==0){
      i=images.length;
   }
   i--;
   IMG.src=images[i];
   
   
}

// следующий
function NextImg(){
   if(i==images.length-1 ){
      i= -1;
   }
   i++;
   IMG.src=images[i];
   
}
