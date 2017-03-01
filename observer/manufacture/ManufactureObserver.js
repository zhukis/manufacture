function ManufactureObserver() {
    Observer.apply(this, arguments);
}

ManufactureObserver.prototype = {
    constructor: ManufactureObserver,

    doIfChanged: function () {
        _.forEach(this.subscriptions, function (item) {
            if (!(item instanceof Observable)) {
                throw new TypeError();
            }

            if (item.isAddedNewActivities) {
                item.makeViewedActivities();
            }
        });
    }
};

ManufactureObserver.prototype = _.assign(inherit(Observer.prototype), ManufactureObserver.prototype);