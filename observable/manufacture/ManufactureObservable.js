function ManufactureObservable() {
    Observable.apply(this, arguments);
    this.isAddedActivities = false;
    this.isNewProductCreated = false;
    this.newActivities = [];
}

ManufactureObservable.prototype = Object.create(Observable.prototype);
ManufactureObservable.prototype.constructor = ManufactureObservable;
ManufactureObservable.prototype.getNewActivities = function () {
    _.forEach(this.newActivities, function (item) {
        console.log(item);
    });
};