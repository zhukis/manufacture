describe("A spec using for checking subscriptions that return after observable subscription", function () {
    var subscription;

    beforeEach(function () {
        subscription = new Subscription();
    });

    it("is checks for presence of constructor and basic methods", function () {
        expect(subscription.constructor).toBeDefined();
        expect(subscription.unsubscribe).toBeDefined();
        expect(subscription.add).toBeDefined();
    });

});