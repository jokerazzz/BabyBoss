ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [59.93566698738394, 30.353585413637266],
        zoom: 15,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

}