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
            arr.forEach(callback);
        }
    };

    helper.some = function (arr, callback) {
        if (!Array.prototype.some) {
            for (var i = 0; i < arr.length; i++) {
                if ( callback(arr[i], i, arr) ) return true;
            }

            return false;

        } else {
            arr.some(callback);
        }
    };

    helper.assign = function (target) {
        if (!Object.assign) {
            if (target === undefined || target === null) {
                throw new TypeError("Cannot convert target argument");
            }

            var to = Object(target);
            for (var i = 1; i < arguments.length; i++) {
                var nextSource = arguments[i];
                if (nextSource === undefined || nextSource === null) continue;

                var keys = Object.keys(nextSource);
                for (var nextIndex = 0; nextIndex < keys.length; nextIndex++) {
                    var nextKey = keys[nextIndex];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
                    if (desc !== undefined && desc.enumerable) {
                        to[nextKey] = nextSource[nextKey];
                    }
                }
            }

            return to;
        } else {
            to = Object(target);

            for (var i = 1; i < arguments.length; i++) {
                to = Object.assign(to, arguments[i])
            }

            return to;
        }

    };

    window._ = helper;
})();