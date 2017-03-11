function ManufactorySubscription() {
    Subscription.apply(this, arguments);

    this.bindedSubscriptions = [];
}

ManufactorySubscription.prototype = {
    constructor: ManufactorySubscription,

    unsubscribe: function () {
        _.forEach(this.bindedSubscriptions, function (item) {
            item();
        });
    },

    add: function (subscription) {
        if ( !(subscription instanceof Subscription) ) throw new TypeError();

        var self = this;
        var amountOfSubscription = this.bindedSubscriptions.length;

        _.forEach(subscription.bindedSubscriptions, function (item) {
            self.bindedSubscriptions.push(item);
        });

        for (var i = 0; i < amountOfSubscription; i++) {
            subscription.bindedSubscriptions.push(this.bindedSubscriptions[i]);
        }
    },

    setSubscription: function (unsubscribeFunction) {
        if ( !( (typeof unsubscribeFunction) == "function" ) ) throw new TypeError();

        this.bindedSubscriptions.push(unsubscribeFunction);
    }
};

ManufactorySubscription.prototype = inherit(Subscription.prototype, ManufactorySubscription.prototype);