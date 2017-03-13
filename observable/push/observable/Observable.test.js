describe("A spec using for checking observable objects", function () {
    var observable;

    beforeEach(function () {
        observable = new Observable();
    });

    it("is checks for presence of constructor and basic methods", function () {
        expect(observable.constructor).toBeDefined();
        expect(observable.subscribe).toBeDefined();
        expect(observable.unsubscribe).toBeDefined();
        expect(observable.publish).toBeDefined();
    });

    it("checks valid observer object type in subscribe method", function () {
        var observer = new Observer();

        observable.subscribers = observer;

        expect(observable.subscribers.next).toBeDefined();
    });
});