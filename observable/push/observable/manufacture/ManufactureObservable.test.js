describe("A spec using for checking observable objects", function () {
    var manufactoryObservable;
    var callback = function () {
        return "success";
    };
    var event = "NEW_OBJECT";

    beforeEach(function () {
        manufactoryObservable = new ManufactureObservable();
    });

    it("is checks for presence of constructor", function () {
        expect(manufactoryObservable.constructor).toBeDefined();
    });

    it("checks valid observer object type in subscribe method", function () {
        var f = function() {
            manufactoryObservable.subscribe(callback, event);
        };

        expect(f).not.toThrow();
    });

    it("checks invalid observer object type in subscribe method", function () {
        var observer = new Manufacture();

        var f = function() {
            manufactoryObservable.subscribe(observer);
        };

        expect(f).toThrowError(TypeError);
    });

    it("checks subscribe and unsubscribe actions", function () {
        spyOn(manufactoryObservable, 'subscribe').and.callThrough();
        spyOn(manufactoryObservable, 'unsubscribe').and.callThrough();

        var subscription = manufactoryObservable.subscribe(callback, event);
        expect(manufactoryObservable.subscribers[event]).toBeDefined();
        subscription.unsubscribe();

        expect(manufactoryObservable.subscribe).toHaveBeenCalled();
        expect(manufactoryObservable.subscribe).toHaveBeenCalledTimes(1);
        expect(manufactoryObservable.subscribe).toHaveBeenCalledWith(callback, event);
        expect(manufactoryObservable.unsubscribe).toHaveBeenCalled();
        expect(manufactoryObservable.unsubscribe).toHaveBeenCalledTimes(1);
    });

    it("checks publishing", function () {
        var customEvent = {
            callbackOfEvent: function (data) {return "data " + data;}
        };
        spyOn(manufactoryObservable, 'publish').and.callThrough();
        spyOn(manufactoryObservable, 'unsubscribe').and.callThrough();
        spyOn(customEvent, 'callbackOfEvent').and.callThrough();

        manufactoryObservable.subscribe(customEvent.callbackOfEvent, event);
        expect(manufactoryObservable.subscribers[event]).toBeDefined();

        manufactoryObservable.publish("test", event);
        expect(manufactoryObservable.publish).toHaveBeenCalled();
        expect(manufactoryObservable.publish).toHaveBeenCalledWith("test", event);
        expect(customEvent.callbackOfEvent).toHaveBeenCalled();
    });
});