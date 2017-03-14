function BaseProduct(name, amount) {
    this.baseProductName = name;
    this.baseProductAmount = amount;
    this.className = "BaseProduct";
}

BaseProduct.prototype = {
    constructor: BaseProduct,

    getBaseProductName: function () {
        return this.baseProductName;
    },

    getBaseProductAmount: function () {
        return this.baseProductAmount;
    },

    getClassName: function () {
        return this.className;
    }
};