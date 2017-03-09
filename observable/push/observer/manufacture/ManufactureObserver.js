function ManufactureObserver(callback) {
    Observer.apply(this, arguments);
    this.callback = callback;
}

ManufactureObserver.prototype = {
    constructor: ManufactureObserver
};

ManufactureObserver.prototype = inherit(Observer.prototype, ManufactureObserver.prototype);