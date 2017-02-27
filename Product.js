function BaseProduct(name, amount) {
    this.name = name;
    this.amount = amount;
}

BaseProduct.prototype.getName = function () {
    return this.name
};

BaseProduct.prototype.getAmount = function () {
    return this.amount
};

function CottageCheese(baseProductName, baseProductAmount, cottageCheeseAmount) {
    BaseProduct.call(this, baseProductName, baseProductAmount);
    this.amount = cottageCheeseAmount;
}

CottageCheese.prototype = Object.create(BaseProduct.prototype);
CottageCheese.prototype.constructor = CottageCheese;
CottageCheese.prototype.getAmount = function () {
    return this.amount;
};

function ChocolatedCheese(baseProductName, baseProductAmount, cottageCheeseAmount, ChocolateCheeseAmount) {
    CottageCheese.call(this, baseProductName, baseProductAmount, cottageCheeseAmount);
    this.amount = ChocolateCheeseAmount;
}

ChocolatedCheese.prototype = Object.create(CottageCheese.prototype);
ChocolatedCheese.prototype.constructor = ChocolatedCheese;