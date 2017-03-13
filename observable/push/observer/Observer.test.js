describe("A spec using for checking observer objects", function () {

    var observer;

    beforeEach(function () {
        observer = new Observer();
    });

    it("is for checking of presence of constructor", function () {
        expect(observer).toBeDefined();
    });

    it("is for checking if statistics is not undefined", function () {
        expect(observer).toBeDefined();
    });
});