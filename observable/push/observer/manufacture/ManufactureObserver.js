function ManufactureObserver(callback, eventType) {
    Observer.apply(this, arguments);
    this.callback = callback;
    this.eventType = eventType;
}

ManufactureObserver.prototype = {
    constructor: ManufactureObserver
};

ManufactureObserver.prototype = inherit(Observer.prototype, ManufactureObserver.prototype);