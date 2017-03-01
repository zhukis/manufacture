function Observer() {
    this.subscriptions = [];
}

Observer.prototype = {
    constructor: Observer,

    subscribe: function (observable) {
        if (!(observable instanceof Observable)) {
            throw new TypeError();
        }
        this.subscriptions.push(observable);
    },

    unsubscribe: function (observable) {
        for (var i = 0; i < this.subscriptions.length; i++) {
            if (this.subscriptions[i] === observable) {
                this.subscriptions.splice(i, 1);
                return;
            }
        }
    },

    doIfChanged: function () {
        _.forEach(this.subscriptions, function (item) {
            if (item.isChanged) {
                console.log("object changed");
                item.makeViewed();
            }
        });
    }
};