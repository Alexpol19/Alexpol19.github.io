// конкструкто слайдера
function Slider(){
   // переменнные - только обьвление их
   this.images = [];
   this.bLeft = null;
   this.bRight = null;
   this.IMG = null;
   this.i = 0;
   // метод инициализации- главный метод в котором оставшиеся опперации
   this.init= function(wrapId){
      // обход проблемы с this - локальное присваивание this к that на момент инициализации главного метода объетка.
      var that = this;

      // переменная котейнер для поиска не в документе а в отдельной обертке именно этого слайдера
      var wrap=document.querySelector('#'+ wrapId);

      // присваоение переменным кнопок сами элементы с контейнера 
      // this.bLeft= wrap.querySelector('.left');

      //создание элемента
      this.bLeft=document.createElement('button');
      this.bLeft.className="left";
      this.bLeft.innerHTML='Влево';

      this.bRight=document.createElement('button');
      this.bRight.className="right";
      this.bRight.innerHTML='Вправо';

      this.IMG=document.createElement('img');
      this.IMG.className="IMG";
      // this.bLeft
      // добавление на страницу
      wrap.appendChild(this.bLeft);
      wrap.appendChild(this.IMG);
      wrap.appendChild(this.bRight);


      // this.bRight= wrap.querySelector('.right');
      // this.IMG= wrap.querySelector('.IMG');


      // добавление новых элментов в массив
      this.images.push('https://cdn.humoraf.ru/wp-content/uploads/2017/08/23-14.jpg');
      this.images.push('https://bipbap.ru/wp-content/uploads/2017/10/0_8eb56_842bba74_XL-640x400.jpg');
      this.images.push('https://mirpozitiva.ru/uploads/posts/2017-04/medium/1492620921_06.jpg');
      this.images.push('https://klike.net/uploads/posts/2019-03/1551516106_1.jpg');
      this.images.push('https://i.pinimg.com/736x/2d/dc/25/2ddc25914e2ae0db5311ffa41781dda1.jpg');
      
      // первый элемент при загрузке страницы
      this.IMG.src=this.images[this.i];

      // добавляем вызов функции по клику
      this.bLeft.addEventListener('click', function(e){ // анониманая функция для использования that
         that.PrevImg(e)});
      this.bRight.addEventListener('click', function(e){ 
         that.NextImg(e)});
   };

   // методы
   // предидущий
   this.PrevImg= function (e){
      if(this.i==0){
         this.i=this.images.length;
      }
      this.i--;
      this.IMG.src=this.images[this.i];
      
      
   };
   
   // следующий
   this.NextImg= function (e){
      if(this.i==this.images.length-1 ){
         this.i= -1;
      }
      this.i++;
      this.IMG.src=this.images[this.i];
      
   };


}
// этот код уже не нужен т.к. где нужно я обращаюсь сразу к конструктору с просьбой создать новый Slider
// // обьект создающий другие обьекты
// var sliderFactory={
//    createNewSlider: function (){
//       // slider объект

//       // метод создания обьекта слайдера
//       var newSlider= new Slider();
//       // возвращаем новый слайдер
//       return newSlider;
   
   
//    },
// };



