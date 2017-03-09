function ManufactureObservable() {
    Observable.apply(this, arguments);
}

ManufactureObservable.prototype = {
    constructor: ManufactureObservable,

    subscribe: function (callback, event) {
        if ( (typeof callback) != "function" ) throw new TypeError();

        if ( !(event in this.subscribers) ) {
            this.subscribers[event] = [];
        }

        var self = this;
        if ( !_.some(self.subscribers[event], function (item) { return callback === item; }) ) {
            var observer = new ManufactureObserver(callback);
            self.subscribers[event].push(observer);
        } else {
            return;
        }

        var wrapper = function () {};

        wrapper.unsubscribe = this.unsubscribe.bind(this, observer);

        return wrapper;
    },

    unsubscribe: function (observer) {
        if ( !(observer instanceof Observer) ) throw new TypeError();

        for (var i = 0; i < this.subscribers.length; i++) {
            if (this.subscribers[i] === observer) {
                this.subscribers.splice(i, 1);
                return;
            }
        }
    },

    publish: function (data, event) {
        _.forEach(this.subscribers[event], function (item) {
            item.callback.call(null, data);
        });
    }

};

ManufactureObservable.prototype = inherit(Observable.prototype, ManufactureObservable.prototype);