(function () {
    if (!Array.prototype.forEach) {
        Array.prototype.forEach = function (callback) {
            for (var i = 0; i < this.length; i++) {
                callback.call(this, this[i], i, this);
            }
        };
    }
}());

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

function Manufacture() {
    this._eventHandlers = {}
}

Manufacture.prototype.createActivity = function (activityName) {
    if (!this._eventHandlers) this._eventHandlers = {};

    if (!this._eventHandlers[activityName]) {
        this._eventHandlers[activityName] = {};
        this._eventHandlers[activityName]["productAmount"] = 0;
        this._eventHandlers[activityName]["actions"] = [];
    }

    var self = this;
    Array.prototype.slice.call(arguments, 1).forEach(function (item) {
        self._eventHandlers[activityName]["actions"].push(item);
    });

};

Manufacture.prototype.run = function (activityName, baseProduct) {
    if (!(baseProduct instanceof BaseProduct)) throw new TypeError("Invalid object type");

    var obj = baseProduct;
    var self = this;
    this._eventHandlers[activityName]["actions"].forEach(function (item) {
        obj = item.call(self, obj);
    });

    this._eventHandlers[activityName]["productAmount"]++;
};

var step1GlaszedCurd = function (milk) {
    if (!(milk instanceof BaseProduct)) throw new TypeError("Invalid object");

    // do something
    console.log("made");

    return new CottageCheese(milk.getName(), milk.getAmount(), 100);
};
var step2GlaszedCurd = function (cottageCheese) {
    if (!(cottageCheese instanceof CottageCheese)) throw new TypeError("Invalid object");

    // do something
    console.log("made");

    return new ChocolatedCheese(BaseProduct.prototype.getName.call(this),
                                BaseProduct.prototype.getAmount.call(this),
                                cottageCheese.getAmount(),
                                100);
};

var manufacture = new Manufacture();
var activityName = "GlazedCurd";
manufacture.createActivity(activityName, step1GlaszedCurd, step2GlaszedCurd);

var milk = new BaseProduct("Milk", 100);
manufacture.run(activityName, milk);