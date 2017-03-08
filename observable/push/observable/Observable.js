function Observable() {
    this.subscribers = {};
}

Observable.prototype = {
    constructor: Observable,

    subscribe: function (callback, event) {
        if ( (typeof callback) != "function" ) throw new TypeError();

        if ( !(event in this.subscribers) ) {
            this.subscribers[event] = [];
        }

        var self = this;
        if ( !_.some(self.subscribers[event], function (item) {
                return callback === item;
            }) ) {

            var observer = {};
            observer[event] = callback;
            self.subscribers.push(observer);
        }
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

    publish: function (data) {
        _.forEach(this.subscribers, function (item) {
            item.add(data);
        });
    }

};