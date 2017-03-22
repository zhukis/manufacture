var step1 = conveyor(function (milk) {
    // do something
    console.log("doing CottageCheese");

    return new CottageCheese(milk.getBaseProductName(), milk.getBaseProductAmount(), 100);
}, BaseProduct);

var step2 = conveyor(function (cottageCheese) {
    // do something
    console.log("doing chocolated CottageCheese");

    return new ChocolatedCheese(cottageCheese.getBaseProductName(),
        cottageCheese.getBaseProductAmount(),
        cottageCheese.getCottageCheeseAmount(),
        300);
}, CottageCheese);

var step3 = conveyor(function (chocolatedCottageCheese) {
    // do something
    console.log("doing CoveredChocolatedCheese");

    return new CoveredChocolatedCheese(chocolatedCottageCheese.getBaseProductName(),
        chocolatedCottageCheese.getBaseProductAmount(),
        chocolatedCottageCheese.getCottageCheeseAmount(),
        chocolatedCottageCheese.getChocolatedCheeseAmount(),
        500);
}, ChocolatedCheese);

var manufacture = new Manufacture();

var param = manufacture.subscribe(function (data) {
    console.log("New product " + data + " created.");
}, "NEW_PRODUCT");

var param2 = manufacture.subscribe(function (data) {
    console.log("New product " + data + " created.");
}, "NEW_PRODUCT");

param.add(param2);

param2.unsubscribe();

manufacture.subscribe(function (data) {
    console.log("Created product" + data);
}, "CREATED_PARTIAL_PRODUCT");

var activityName = "GlazedCurd";
manufacture.createActivity(activityName, step1, step2, step3);

var timerId = setTimeout(function runner() {
    var milk = new BaseProduct("Milk", 5000);
    manufacture.run(activityName, milk);

    timerId = setTimeout(runner, 5000);
}, 100);
