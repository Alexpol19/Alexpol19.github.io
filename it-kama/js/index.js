// присваиваю к переменной то что вернется из метода обьекта --- возвратится обьект нового слайдера
// var slider = new Slider();

// присваиваю к переменной то что вернется из метода обьекта --- возвратится обьект нового слайдера
// var slider1=new Slider();


// запуск слайдера
// slider.init('slider');
// запуск слайдера1
// slider1.init('slider1');

// console.log(slider);
// console.log(slider1);


//добавленгие кнопки - добавиь слайдер
var boom=document.createElement('button'),
   wrap_boom=document.getElementById('wrap_boom'),
   big_wrapper=document.getElementById('big_wrapper');

console.log(wrap_boom);
boom.id='boom';
boom.innerHTML='Добавить слайдер';

wrap_boom.appendChild(boom);


// функция создания слайдера
var number_of_sliders=0;
function getNewSlider(){

   // get Container for Slider - slider0, 1, 2....
   var container=document.createElement('div');
   container.id='slider'+number_of_sliders;
   number_of_sliders++;
   
   big_wrapper.appendChild(container);

   sliderId=container.id;
   sliderId= new Slider();

   sliderId.init(container.id);
}

// вызов функции создания слайдера
boom.addEventListener('click', getNewSlider);

