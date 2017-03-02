describe("A spec using for checking observable objects", function () {
    var observable;

    beforeEach(function () {
        observable = new Observable();
    });

    afterEach(function () {
        observable = null;
    });

    it("is checks for presence of constructor", function () {
        expect(observable.constructor).toBeDefined();
    });

    it("checks valid observer object type in subscribe method", function () {
        var observer = new Observer();

        var f = function() {
            observable.subscribe(observer);
        };

        expect(f).not.toThrow();
    });

    it("checks invalid observer object type in subscribe method", function () {
        var observer = new Manufacture();

        var f = function() {
            observable.subscribe(observer);
        };

        expect(f).toThrowError(TypeError);
    });
});