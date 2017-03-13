describe("A spec using to check ManufactureObserver object", function () {

    var observer;

    var callback = function () {
        return "success";
    };

    beforeEach(function () {
        observer = new ManufactureObserver(callback);
    });

    it("is for checking of presence of constructor", function () {
        expect(observer).toBeDefined();
    });

    it("is for checking if callback exists", function () {
        expect(observer.callback).toBeDefined();
    });

    it("is for checking work of callback", function () {
        spyOn(observer, 'callback').and.callThrough();

        observer.callback();

        expect(observer.callback).toHaveBeenCalled();
        expect(observer.callback).toHaveBeenCalledTimes(1);
        expect(observer.callback()).toBe("success");
    });

    it("is for checking inheritance", function () {
        spyOn(observer, 'next').and.callThrough();

        observer.next();

        expect(observer.next).toHaveBeenCalled();
        expect(observer.next()).toBeUndefined();
    });
});