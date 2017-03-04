describe("A spec using for checking BaseProduct class", function () {

    it("checks if constructor exists", function () {
        var baseProduct = new BaseProduct();
        expect(baseProduct.constructor).toBeDefined();
    });

    it("checks creation of BaseProduct", function () {
        var name = "Lime";
        var amount = 10;
        var baseProduct = new BaseProduct(name, amount);

        expect(baseProduct.getBaseProductName()).toEqual(name);
        expect(baseProduct.getBaseProductAmount()).toEqual(amount);
    });
});