var step1 = function (milk) {
    if ( !(milk instanceof BaseProduct) ) {
        throw new TypeError("Invalid type of object. BaseProduct type expected.");
    }

    // do something
    console.log("doing CottageCheese");

    return new CottageCheese(milk.getBaseProductName(), milk.getBaseProductAmount(), 100);
};

var step2 = function (cottageCheese) {
    if ( !(cottageCheese instanceof CottageCheese) ) {
        throw new TypeError("Invalid type of object. CottageCheese type expected.");
    }

    // do something
    console.log("doing chocolated CottageCheese");

    return new ChocolatedCheese(cottageCheese.getBaseProductName(),
        cottageCheese.getBaseProductAmount(),
        cottageCheese.getCottageCheeseAmount(),
        300);
};

var step3 = function (chocolatedCottageCheese) {
    if ( !(chocolatedCottageCheese instanceof ChocolatedCheese) ){
        throw new TypeError("Invalid type of object. ChocolatedCheese type expected.");
    }

    // do something
    console.log("doing CoveredChocolatedCheese");

    return new CoveredChocolatedCheese(chocolatedCottageCheese.getBaseProductName(),
        chocolatedCottageCheese.getBaseProductAmount(),
        chocolatedCottageCheese.getCottageCheeseAmount(),
        chocolatedCottageCheese.getChocolatedCheeseAmount(),
        500);
};

var manufacture = new Manufacture();

manufacture.subscribe(function (data) {
    console.log("New product " + data + " created.");
}, "NEW_PRODUCT");

manufacture.subscribe(function (data) {
    console.log("Created product from step 3 created. Base product amount = " + data);
}, "CREATED_PRODUCT_FROM_STEP_3");

var activityName = "GlazedCurd";
manufacture.createActivity(activityName, step1, step2, step3);

var timerId = setTimeout(function runner() {
    var milk = new BaseProduct("Milk", 5000);
    manufacture.run(activityName, milk);

    timerId = setTimeout(runner, 5000);
}, 100);
