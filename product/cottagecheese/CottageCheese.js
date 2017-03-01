function CottageCheese(baseProductName, baseProductAmount, cottageCheeseAmount) {
    BaseProduct.call(this, baseProductName, baseProductAmount);

    this.amount = cottageCheeseAmount;
}

CottageCheese.prototype = {
    constructor: CottageCheese,

    getAmount: function () {
        return this;
    }
};

CottageCheese.prototype = _.assign(inherit(BaseProduct.prototype), CottageCheese.prototype);