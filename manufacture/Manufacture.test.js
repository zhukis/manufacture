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
        var publishMessage = "Preparing";
        var event = "NEW_OBJECT";
        var callback1 = function (data) {
            return "data " + data;
        };
        var callback2 = function (data) {
            return "data2 " + data;
        };

        spyOn(manufacture, 'subscribe').and.callThrough();
        spyOn(manufacture, 'publish').and.callThrough();
        spyOn(manufacture, 'unsubscribe').and.callThrough();

        var subscription1 = manufacture.subscribe(callback1, event);
        var subscription2 = manufacture.subscribe(callback2, event);

        spyOn(subscription1, 'add').and.callThrough();
        spyOn(subscription2, 'add').and.callThrough();
        spyOn(subscription1, 'unsubscribe').and.callThrough();
        spyOn(subscription2, 'unsubscribe').and.callThrough();

        subscription1.add(subscription2);
        expect(manufacture.subscribe).toHaveBeenCalled();
        expect(manufacture.subscribe).toHaveBeenCalledTimes(2);
        expect(manufacture.subscribe).toHaveBeenCalledWith(callback1, event);

        manufacture.publish(publishMessage, event);
        expect(manufacture.publish).toHaveBeenCalled();
        expect(manufacture.publish).toHaveBeenCalledTimes(1);
        expect(manufacture.publish).toHaveBeenCalledWith(publishMessage, event);

        subscription2.unsubscribe();
        expect(manufacture.unsubscribe).toHaveBeenCalled();
        expect(manufacture.unsubscribe).toHaveBeenCalledTimes(2);
        expect(subscription1.unsubscribe).toHaveBeenCalledTimes(1);
        expect(subscription2.unsubscribe).toHaveBeenCalledTimes(1);
        expect(manufacture.subscribers).toEqual(jasmine.arrayContaining([]));
    });

    it("checks manufacture creations with observer", function () {
        var event = "NEW_PRODUCT";
        var thirdProductEvent = "CREATED_PRODUCT_FROM_STEP_3";
        var callback = function (data) {
            return "data " + data;
        };
        var activityName = "CoveredGlazedCurd";

        spyOn(manufacture, 'createActivity').and.callThrough();
        spyOn(manufacture, 'run').and.callThrough();

        var subscription = manufacture.subscribe(callback, event);
        var subscription2 = manufacture.subscribe(callback, thirdProductEvent);
        subscription.add(subscription2);

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
        expect(subscription.subscription).not.toBeNull();

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