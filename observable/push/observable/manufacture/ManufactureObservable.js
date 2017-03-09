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

        for (var property in this.subscribers) {
            if ( this.subscribers.hasOwnProperty(property) ) {
                for (var i = 0; i < this.subscribers[property].length; i++) {
                    if (this.subscribers[property][i] === observer) {
                        this.subscribers[property].splice(i, 1);
                        return;
                    }
                }
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