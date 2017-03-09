function Observable() {
    this.subscribers = {};
}

Observable.prototype = {
    constructor: Observable,

    subscribe: function (callback, event) {},

    unsubscribe: function (observer) {},

    publish: function (data, event) {}

};