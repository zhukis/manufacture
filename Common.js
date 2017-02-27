;(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback) {
            for (var i = 0; i < this.length; i++) {
                callback.call(this, this[i], i, this);
            }
        };
    }
}());