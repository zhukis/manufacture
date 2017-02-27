function Observable() {
    this.isChanged = false;
}

function ManufactureObservable() {
    Observable.apply(this, arguments);
    this.isAddedActivities = false;
    this.isNewProductCreated = false;
    this.newActivities = [];
}

ManufactureObservable.prototype = Object.create(Observable.prototype);
ManufactureObservable.prototype.constructor = Manufacture;
ManufactureObservable.prototype.getNewActivities = function () {
    this.newActivities.forEach(function (item) {
        console.log(item);
    });
};

function Manufacture() {
    this._eventHandlers = {}
}

Manufacture.prototype = Object.create(ManufactureObservable.prototype);
Manufacture.prototype.constructor = ManufactureObservable;

Manufacture.prototype.createActivity = function (activityName) {
    if (!this._eventHandlers) this._eventHandlers = {};

    if (!this._eventHandlers[activityName]) {
        this._eventHandlers[activityName] = {};
        this._eventHandlers[activityName]["productAmount"] = 0;
        this._eventHandlers[activityName]["actions"] = [];
    }

    var self = this;
    Array.prototype.slice.call(arguments, 1).forEach(function (item) {
        self._eventHandlers[activityName]["actions"].push(item);
    });

};

Manufacture.prototype.run = function (activityName, baseProduct) {
    if (!(baseProduct instanceof BaseProduct)) throw new TypeError("Invalid object type");

    var obj = baseProduct;
    var self = this;
    this._eventHandlers[activityName]["actions"].forEach(function (item) {
        obj = item.call(self, obj);
    });

    this._eventHandlers[activityName]["productAmount"]++;
};