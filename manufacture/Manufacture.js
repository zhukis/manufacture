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
        }

        var self = this;
        _.forEach(Array.prototype.slice.call(arguments, 1), function (item) {
            self._eventHandlers[activityName]["actions"].push(item);
        });
    },

    run: function (activityName, product) {
        var obj = product;
        var self = this;
        _.forEach(this._eventHandlers[activityName]["actions"], function (item, i) {
            if ( !_.some(item.requiredParamsType, function (requiredType) {return obj instanceof requiredType;}) ) {
                throw new TypeError();
            }

            obj = item.call(self, obj);

            self.publish(obj.getClassName(), "CREATED_PARTIAL_PRODUCT");
        });

        this._eventHandlers[activityName]["productAmount"]++;

        this.publish(obj.getClassName(), "NEW_PRODUCT");
    }
};

Manufacture.prototype = inherit(ManufactureObservable.prototype, Manufacture.prototype);