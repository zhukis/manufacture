function BaseProduct(name, amount) {
    this.name = name;
    this.amount = amount;
}

BaseProduct.prototype = {
    constructor: BaseProduct,

    getName: function () {
        return this.name;
    },

    getAmount: function () {
        return this.amount;
    }
};