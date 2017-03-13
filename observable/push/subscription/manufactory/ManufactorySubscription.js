function ManufactorySubscription() {
    Subscription.apply(this, arguments);

    this.subscription = null;
    this.bindedSubscriptions = [];
}

ManufactorySubscription.prototype = {
    constructor: ManufactorySubscription,

    unsubscribe: function () {
        this.subscription();

        var self = this;

        _.forEach(this.bindedSubscriptions, function (item) {
            for (var i = 0; i < item.bindedSubscriptions.length; i++) {
                if (item.bindedSubscriptions[i] == self) {
                    item.bindedSubscriptions.splice(i, 1);
                    break;
                }
            }
        });

        _.forEach(this.bindedSubscriptions, function (item) {
            item.unsubscribe();
        });

        this.bindedSubscriptions.length = 0;
    },

    add: function (subscription) {
        if ( !(subscription instanceof Subscription) ) throw new TypeError();

        this.bindedSubscriptions.push(subscription);
        subscription.bindedSubscriptions.push(this);
    },

    setSubscription: function (unsubscribeFunction) {
        if ( !( (typeof unsubscribeFunction) == "function" ) ) throw new TypeError();

        this.subscription = unsubscribeFunction;
    }
};

ManufactorySubscription.prototype = inherit(Subscription.prototype, ManufactorySubscription.prototype);