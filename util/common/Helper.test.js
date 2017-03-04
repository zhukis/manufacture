describe("A spec for checking methods of helper", function () {

    it("checks for function", function () {
        var arr = [3, 4, 1, 2];
        var lastIndex = 0;

        spyOn(_, 'forEach').and.callThrough();

        _.forEach(arr, function (item, i, arr) {
            lastIndex = i;
        });

        expect(_.forEach).toHaveBeenCalledTimes(1);
        expect(lastIndex).toEqual(arr.length - 1);
    });

    it("checks some function", function () {
        var arr = [3, 4, -1, 2];
        var lastIndex = 0;

        spyOn(_, 'some').and.callThrough();

        _.some(arr, function (item, i, arr) {
            lastIndex = i;
            return item < 0;
        });

        expect(_.some).toHaveBeenCalledTimes(1);
        expect(lastIndex).toEqual(2);
    });

    it("checks assign function", function () {

        spyOn(_, 'assign').and.callThrough();

        function A() {}
        A.prototype.a = 1;

        function B() {}
        B.prototype = inherit(A.prototype, B.prototype);
        B.prototype.k = 5;

        var c = {c: 3, d: 2};

        Object.defineProperty(c, "d", {enumerable: false});

        var assignedObj = _.assign({}, B.prototype, c);

        expect(assignedObj.a).toBeUndefined();
        expect(assignedObj.k).toEqual(5);
        expect(assignedObj.d).toBeUndefined();
        expect(assignedObj.c).toEqual(3);
    });

});