function Observable() {
    this.isChanged = true;
}

Observable.prototype = {
    constructor: Observable,

    makeViewed: function () {
        this.isChanged = false;
        console.log("set unchanged");
    }
};