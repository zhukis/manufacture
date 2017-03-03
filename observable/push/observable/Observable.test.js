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

    it("checks subscribe and unsubscribe actions", function () {
        var observer = new Observer();

        spyOn(observable, 'subscribe');
        spyOn(observable, 'unsubscribe');

        observable.subscribe(observer);
        observable.unsubscribe(observer);

        expect(observable.subscribe).toHaveBeenCalled();
        expect(observable.subscribe).toHaveBeenCalledTimes(1);
        expect(observable.subscribe).toHaveBeenCalledWith(jasmine.objectContaining({statistics: []}));
        expect(observable.unsubscribe).toHaveBeenCalled();
        expect(observable.unsubscribe).toHaveBeenCalledTimes(1);
        expect(observable.subscribe).toHaveBeenCalledWith(jasmine.objectContaining({statistics: []}));
    });

    it("checks publishing", function () {
        var observer = new Observer();

        spyOn(observable, 'publish').and.callThrough();
        spyOn(observable, 'unsubscribe').and.callThrough();
        spyOn(observer, 'add').and.callThrough();
        spyOn(observer, 'showStatistics');

        observable.subscribe(observer);
        observable.publish("test");
        observer.showStatistics();
        // expect(observer.statistics).toEqual(jasmine.arrayContaining(["test"]));
        observable.unsubscribe();
        // expect(observer.statistics).toEqual(jasmine.arrayContaining([]));

        expect(observable.publish).toHaveBeenCalled();
        expect(observable.publish).toHaveBeenCalledWith("test");
        expect(observer.showStatistics).toHaveBeenCalled();
        expect(observable.unsubscribe).toHaveBeenCalled();
        // expect(observable.subscribers).toEqual(jasmine.arrayContaining([]));
        expect(observer.add).toHaveBeenCalled();

    });
});