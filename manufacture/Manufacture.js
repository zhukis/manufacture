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

    run: function (activityName, baseProduct) {
        if (!(baseProduct instanceof BaseProduct)) throw new TypeError("Invalid object type");

        var obj = baseProduct;
        var self = this;
        _.forEach(this._eventHandlers[activityName]["actions"], function (item, i) {
            obj = item.call(self, obj);

            if (i == 2) {
                self.publish(obj.getBaseProductAmount(), "CREATED_PRODUCT_FROM_STEP_3");
            }
        });

        this._eventHandlers[activityName]["productAmount"]++;

        switch (this._eventHandlers[activityName]["actions"].length) {
            case 1:
                this.publish(obj.getBaseProductAmount(), "NEW_PRODUCT");
                break;
            case 2:
                this.publish(obj.getCottageCheeseAmount(), "NEW_PRODUCT");
                break;
            case 3:
                this.publish(obj.getChocolatedCheeseAmount(), "NEW_PRODUCT");
                break;
            case 4:
                this.publish(obj.getChocolatedCheeseAmount(), "NEW_PRODUCT");
                break;
        }

    }
};

Manufacture.prototype = inherit(ManufactureObservable.prototype, Manufacture.prototype);