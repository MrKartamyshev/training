function addEvent(element, eventName, fn) {
    if (element.addEventListener)
        element.addEventListener(eventName, fn, false);
    else if (element.attachEvent)
        element.attachEvent('on' + eventName, fn);
}
addEvent(window, 'load', function () {
    tjq('#serach_surfboard').on('show.bs.tooltip', function () {
        if (window.localStorage.showedsurfboard != "1") {
            window.localStorage.showedsurfboard = "1";
            return true;
        } else {
            return false;
        }
    })
    tjq('#serach_snowboard').on('show.bs.tooltip', function () {
        if (window.localStorage.showedsnowboard != "1") {
            window.localStorage.showedsnowboard = "1";
            return true;
        } else {
            return false;
        }
    })
});