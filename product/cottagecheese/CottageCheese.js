function CottageCheese(baseProductName, baseProductAmount, cottageCheeseAmount) {
    BaseProduct.call(this, baseProductName, baseProductAmount);

    this.cottageCheeseAmount = cottageCheeseAmount;
    this.className = "CottageCheese";
}

CottageCheese.prototype = {
    constructor: CottageCheese,

    getCottageCheeseAmount: function () {
        return this.cottageCheeseAmount;
    },

    getClassName: function () {
        return this.className;
    }
};

CottageCheese.prototype = inherit(BaseProduct.prototype, CottageCheese.prototype);