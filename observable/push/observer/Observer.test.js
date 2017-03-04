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

    it("is equals 1 when add 1 to array, and length to be 1", function () {
        observer.statistics.push(1);

        expect(observer.statistics[0]).toBe(1);

        expect(observer.statistics.length).toBe(1);
    });

    it("is tracks that the method showStatistics calls on empty array", function () {
        spyOn(observer, 'showStatistics');

        observer.showStatistics();

        expect(observer.showStatistics).toHaveBeenCalled();
    });

    it("is checks if add method calls", function () {
        spyOn(observer, 'add');

        observer.add([1, 2, 3]);

        expect(observer.add).toHaveBeenCalled();
    })
});