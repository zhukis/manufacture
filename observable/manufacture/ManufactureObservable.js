function ManufactureObservable() {
    Observable.apply(this, arguments);

    this.isAddedNewActivities = false;
}

ManufactureObservable.prototype = {
    constructor: ManufactureObservable,

    makeViewedActivities: function () {
        this.isAddedNewActivities = false;
        console.log("set unviewed");
        Observable.prototype.makeViewed.call(this);
    }
};

ManufactureObservable.prototype = _.assign(inherit(Observable.prototype), ManufactureObservable.prototype);