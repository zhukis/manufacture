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

var observer = new Observer();

var manufacture = new Manufacture();
manufacture.subscribe(observer);

var activityName = "GlazedCurd";
manufacture.createActivity(activityName, step1GlaszedCurd, step2GlaszedCurd);

var milk = new BaseProduct("Milk", 100);
manufacture.run(activityName, milk);

observer.showStatistics();