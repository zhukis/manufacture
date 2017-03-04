describe("A spec for checking manufacture functionality", function () {
    var manufacture;

    beforeEach(function () {
        manufacture = new Manufacture();
    });

    it("checks for presence of constructor", function () {
        expect(manufacture.constructor).toBeDefined();
    });

    it("checks for presence of observable fields", function () {
        expect(manufacture.subscribers).toEqual(jasmine.arrayContaining([]));
    });

    it("checks observer", function () {
        var observer = new Observer();
        var publishMessage = "Preparing";

        spyOn(manufacture, 'subscribe').and.callThrough();
        spyOn(manufacture, 'publish').and.callThrough();
        spyOn(manufacture, 'unsubscribe').and.callThrough();
        spyOn(observer, 'add').and.callThrough();

        manufacture.subscribe(observer);
        expect(manufacture.subscribe).toHaveBeenCalled();
        expect(manufacture.subscribe).toHaveBeenCalledTimes(1);
        expect(manufacture.subscribe).toHaveBeenCalledWith(jasmine.objectContaining({statistics: []}));

        manufacture.publish(publishMessage);
        expect(manufacture.publish).toHaveBeenCalled();
        expect(manufacture.publish).toHaveBeenCalledTimes(1);
        expect(manufacture.publish).toHaveBeenCalledWith(publishMessage);
        expect(observer.statistics).toEqual(jasmine.arrayContaining([publishMessage]));
        expect(observer.add).toHaveBeenCalled();

        manufacture.unsubscribe(observer);
        expect(manufacture.unsubscribe).toHaveBeenCalled();
        expect(manufacture.unsubscribe).toHaveBeenCalledTimes(1);
        expect(manufacture.unsubscribe).toHaveBeenCalledWith(jasmine.objectContaining({statistics: [publishMessage]}));

        expect(manufacture.subscribers).toEqual(jasmine.arrayContaining([]));
    });

    it("checks manufacture creations with observer", function () {
        var observer = new Observer();
        var activityName = "CoveredGlazedCurd";
        var publishMessage = "Manufacture " + activityName + " created";

        spyOn(manufacture, 'createActivity').and.callThrough();
        spyOn(manufacture, 'run').and.callThrough();

        manufacture.subscribe(observer);

        var step1 = function (milk) {
            if (!(milk instanceof BaseProduct)) throw new TypeError();

            return new CottageCheese(milk.getBaseProductName(), milk.getBaseProductAmount(), 100);
        };

        var step2 = function (cottageCheese) {
            if (!(cottageCheese instanceof CottageCheese)) throw new TypeError();

            return new ChocolatedCheese(cottageCheese.getBaseProductName(),
                cottageCheese.getBaseProductAmount(),
                cottageCheese.getCottageCheeseAmount(),
                200);
        };

        var step3 = function (chocolatedProduct) {
            if ( !(chocolatedProduct instanceof ChocolatedCheese) ) throw new TypeError();

            return new CoveredChocolatedCheese(chocolatedProduct.getBaseProductName(),
                chocolatedProduct.getBaseProductAmount(),
                chocolatedProduct.getCottageCheeseAmount(),
                chocolatedProduct.getChocolatedCheeseAmount(),
                300);
        };

        manufacture.createActivity(activityName, step1, step2, step3);

        expect(manufacture.createActivity).toHaveBeenCalledTimes(1);
        expect(observer.statistics).toEqual(jasmine.arrayContaining([publishMessage]));

        var milk = new BaseProduct("Milk", 10);
        manufacture.run(activityName, milk);

        expect(manufacture._eventHandlers[activityName]["productAmount"]).toBeGreaterThan(0);

        jasmine.clock().install();

        setInterval(function () {
            manufacture.run(activityName, milk);
        }, 2000);

        expect(manufacture.run).toHaveBeenCalledTimes(1);
        jasmine.clock().tick(2001);
        expect(manufacture.run).toHaveBeenCalledTimes(2);

        jasmine.clock().uninstall();
    });

});