function Manufacture() {
    this._eventHandlers = {}
}

Manufacture.prototype.setActivity = function (activityName) {
    if (!this._eventHandlers) this._eventHandlers = {};

    if (!this._eventHandlers[activityName]) {
        this._eventHandlers[activityName] = {};
        this._eventHandlers[activityName]["productAmount"] = 0;
        this._eventHandlers[activityName]["actions"] = [];
    }

    for (var i = 1; i < arguments.length; i++) {
        this._eventHandlers[activityName]["actions"].push(arguments[i]);
    }
};
