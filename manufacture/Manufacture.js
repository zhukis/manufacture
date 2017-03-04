function Manufacture() {
    Observable.apply(this, arguments);

    this._eventHandlers = {}
}

Manufacture.prototype = {
    constructor: Observable,

    createActivity: function (activityName) {
        if (!this._eventHandlers) this._eventHandlers = {};

        if (!this._eventHandlers[activityName]) {
            this._eventHandlers[activityName] = {};
            this._eventHandlers[activityName]["productAmount"] = 0;
            this._eventHandlers[activityName]["actions"] = [];
            this.publish("Manufacture " + activityName + " created");
        }

        var self = this;
        _.forEach(Array.prototype.slice.call(arguments, 1), function (item) {
            self._eventHandlers[activityName]["actions"].push(item);
        });
    },

    run: function (activityName, baseProduct) {
        if (!(baseProduct instanceof BaseProduct)) throw new TypeError("Invalid object type");

        this.publish("Manufacture " + activityName + " started at " + new Date());
        var obj = baseProduct;
        var self = this;
        _.forEach(this._eventHandlers[activityName]["actions"], function (item) {
            obj = item.call(self, obj);
        });

        this._eventHandlers[activityName]["productAmount"]++;
        this.publish("Manufacture " + activityName + " finished at " + new Date());
        this.publish("Amount of product in " + activityName + " is " + this._eventHandlers[activityName]["productAmount"]);
    }
};

Manufacture.prototype = inherit(Observable.prototype, Manufacture.prototype);