function Observable() {
    this.subscribers = [];
}

Observable.prototype = {
    constructor: Observable,

    subscribe: function (observer) {
        if ( !(observer instanceof Observer) ) throw new TypeError();

        var self = this;
        if ( !_.some(self.subscribers, function (item) {
                return item === observer;
            }) ) {
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