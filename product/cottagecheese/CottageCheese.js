function CottageCheese(baseProductName, baseProductAmount, cottageCheeseAmount) {
    BaseProduct.call(this, baseProductName, baseProductAmount);

    this.cottageCheeseAmount = cottageCheeseAmount;
}

CottageCheese.prototype = {
    constructor: CottageCheese,

    getCottageCheeseAmount: function () {
        return this.cottageCheeseAmount;
    }
};

CottageCheese.prototype = inherit(BaseProduct.prototype, CottageCheese.prototype);