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

// var proto = Object.create(BaseProduct.prototype);
// CottageCheese.prototype = _.assign({}, proto, CottageCheese.prototype);
// debugger;

CottageCheese.prototype = Object.create(BaseProduct.prototype);
CottageCheese.prototype.constructor = CottageCheese;
CottageCheese.prototype.getAmount = function () {
    return this.amount;
};