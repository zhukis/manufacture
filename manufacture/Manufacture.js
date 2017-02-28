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
    _.forEach(Array.prototype.slice.call(arguments, 1), function (item) {
        self._eventHandlers[activityName]["actions"].push(item);
    });

};

Manufacture.prototype.run = function (activityName, baseProduct) {
    if (!(baseProduct instanceof BaseProduct)) throw new TypeError("Invalid object type");

    var obj = baseProduct;
    var self = this;
    _.forEach(this._eventHandlers[activityName]["actions"], function (item) {
        obj = item.call(self, obj);
    });

    this._eventHandlers[activityName]["productAmount"]++;
};