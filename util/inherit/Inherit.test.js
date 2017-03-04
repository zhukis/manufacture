describe("A spec for checking inheritance", function () {

    it("checks null", function () {
        var f = function () {
            inherit(null, null);
        };
        expect(f).toThrowError(TypeError);
    });

    it("checks objects", function () {
        function A() {}
        A.prototype = {
            check: 1
        };

        function B() {}

        B.prototype = inherit(A.prototype, B.prototype);

        var b = new B();

        expect(b.check).toEqual(1);
    });
});