ymaps.ready(init);
function init() {
    var myMap = new ymaps.Map("map", {
            center: [55.708841, 37.622612],
            zoom: 11
        }, {
            searchControlProvider: 'yandex#search'
        });
    myMap.geoObjects
        .add(new ymaps.Placemark([55.741850, 37.629295], {
            balloonContent: 'м. Новокузнецкая'
        }, {
            preset: 'islands#blueEducationIcon'
        }))
        .add(new ymaps.Placemark([55.740943, 37.626439], {
            balloonContent: 'м. Третьяковская'
        }, {
            preset: 'islands#blueEducationIcon'
        }))
        .add(new ymaps.Placemark([55.655107, 37.648798], {
            balloonContent: 'м. Каширская'
        }, {
            preset: 'islands#blueEducationIcon'
        }))
        .add(new ymaps.Placemark([55.683386, 37.622863], {
            balloonContent: 'м. Нагатинская'
        }, {
            preset: 'islands#redEducationIcon'
        }));
}