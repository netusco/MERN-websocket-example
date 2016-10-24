var dispatcher = require("../dispatcher"),
	ShapeService = require("../services/ShapeService");

function ShapeStore() {
    var listeners = [];

    function onChange(listener) {
        getShapes(listener);
        listeners.push(listener);
    }
    
    function getShapes(cb){
        ShapeService.getShapes().then(function (res) {

            cb(res);
        });
    }

    function triggerListeners() {
        getShapes(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    return {
        onChange: onChange
    }
}

module.exports = ShapeStore();

