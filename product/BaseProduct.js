function BaseProduct(name, amount) {
    this.baseProductName = name;
    this.baseProductAmount = amount;
}

BaseProduct.prototype = {
    constructor: BaseProduct,

    getBaseProductName: function () {
        return this.baseProductName;
    },

    getBaseProductAmount: function () {
        return this.baseProductAmount;
    }
};