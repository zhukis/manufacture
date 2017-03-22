describe("A spec using for checking BaseProduct class", function () {

    it("checks if constructor exists", function () {
        var baseProduct = new BaseProduct();
        expect(baseProduct.constructor).toBeDefined();
    });

    it("checks creation of BaseProduct", function () {
        var name = "Lime";
        var amount = 200;
        var baseProduct = new BaseProduct(name, amount);

        expect(baseProduct.getBaseProductName()).toEqual(name);
        expect(baseProduct.getBaseProductAmount()).toEqual(amount);
    });

    it("check amount of input product (min value)", function () {
        var name = "Lime";
        var amount = 10;

        var f = function () {
            var baseProduct = new BaseProduct(name, amount);
        };

        expect(f).toThrowError();
    });

    it("check amount of input product (max value)", function () {
        var name = "Lime";
        var amount = 1000000000;

        var f = function () {
            var baseProduct = new BaseProduct(name, amount);
        };

        expect(f).toThrowError();
    });
});