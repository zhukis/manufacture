;(function () {

    function helper(value) {
        // do something in future
    }

    helper.forEach = function(arr, callback) {
        if (!Array.prototype.forEach) {
            for (var i = 0; i < arr.length; i++) {
                callback(arr[i], i, this);
            }
        } else {
            arr.forEach(callback)
        }
    };

    window._ = helper;
})();