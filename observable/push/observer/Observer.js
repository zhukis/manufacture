function Observer() {
    this.statistics = [];
}

Observer.prototype = {
    constructor: Observer,

    add: function (data) {
        this.statistics.push(data);
    },

    showStatistics: function () {
        _.forEach(this.statistics, function (item) {
            console.log(item);
        });
    }
};