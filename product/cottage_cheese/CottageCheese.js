function CottageCheese(baseProductName, baseProductAmount, cottageCheeseAmount) {
    BaseProduct.call(this, baseProductName, baseProductAmount);
    this.amount = cottageCheeseAmount;
}

CottageCheese.prototype = Object.create(BaseProduct.prototype);
CottageCheese.prototype.constructor = CottageCheese;
CottageCheese.prototype.getAmount = function () {
    return this.amount;
};