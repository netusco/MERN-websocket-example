var $ = require("jquery");
var promise = require("es6-promise");
var	url = require('url');
var resourceUrl = "/api/shapes";

module.exports = {
    getShapes: function () {
        var Promise = promise.Promise;
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: resourceUrl,
                method: "GET",
                dataType: "json",
                success: resolve,
                error: reject
            });
        });
    }
}

