describe("A spec using for checking objects", function () {
    var manufactorySubscription;

    beforeEach(function () {
        manufactorySubscription = new ManufactorySubscription();
    });

    it("checks inheritance", function () {
        expect(manufactorySubscription.constructor).toBeDefined();
        expect(manufactorySubscription.unsubscribe).toBeDefined();
        expect(manufactorySubscription.add).toBeDefined();
    });

    it("checks method setSubscription", function () {
        spyOn(manufactorySubscription, 'setSubscription');
        var callback = function () {
            return "data";
        };

        manufactorySubscription.setSubscription(callback);

        expect(manufactorySubscription.setSubscription).toHaveBeenCalled();
        expect(manufactorySubscription.setSubscription).toHaveBeenCalledWith(callback);
    });

    it("checks add method", function () {
        var callback = function () {
            return "data";
        };
        var subscription = new ManufactorySubscription();

        spyOn(manufactorySubscription, 'add').and.callThrough();

        subscription.setSubscription(callback);
        manufactorySubscription.setSubscription(callback);
        manufactorySubscription.add(subscription);

        expect(manufactorySubscription.add).toHaveBeenCalled();
        expect(manufactorySubscription.bindedSubscriptions.length).toBe(1);
        expect(manufactorySubscription.bindedSubscriptions[0]).toEqual(subscription);
        expect(subscription.bindedSubscriptions.length).toBe(1);
        expect(subscription.bindedSubscriptions[0]).toEqual(manufactorySubscription)
    });

    it("checks unsubscribe method", function () {
        var callback = function () {
            return "data";
        };
        var subscription = new ManufactorySubscription();
        spyOn(manufactorySubscription, 'unsubscribe').and.callThrough();
        spyOn(subscription, 'unsubscribe').and.callThrough();

        subscription.setSubscription(callback);
        manufactorySubscription.setSubscription(callback);
        manufactorySubscription.add(subscription);

        subscription.unsubscribe();
        expect(manufactorySubscription.bindedSubscriptions.length).toBe(0);

        expect(manufactorySubscription.unsubscribe).toHaveBeenCalled();
        expect(subscription.bindedSubscriptions.length).toBe(0);
        expect(manufactorySubscription.bindedSubscriptions.length).toBe(0);
    });

});