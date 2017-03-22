function BaseProduct(name, amount) {
    this.className = "BaseProduct";

    this.setBaseProductData(name, amount);
}

BaseProduct.prototype = {
    constructor: BaseProduct,

    MIN_BASE_PRODUCT_AMOUNT: 200,

    MAX_BASE_PRODUCT_AMOUNT: 10000,

    getBaseProductName: function () {
        return this.baseProductName;
    },

    getBaseProductAmount: function () {
        return this.baseProductAmount;
    },

    getClassName: function () {
        return this.className;
    },

    setBaseProductData: function (name, amount) {
        this.baseProductName = name;

        if (amount < this.MIN_BASE_PRODUCT_AMOUNT || amount > this.MAX_BASE_PRODUCT_AMOUNT)
            throw new Error("Amount value is out of valuable range");

        this.baseProductAmount = amount;
    }
};