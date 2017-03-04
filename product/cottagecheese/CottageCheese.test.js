describe("A spec using to check creation CottageCheese", function () {

    it("checks if constructor exists", function () {
        var cottageCheese = new CottageCheese();

        expect(cottageCheese.constructor).toBeDefined();
    });

    it("checks params after creation", function () {
        var name = "Lime";
        var baseProductAmount = 10;
        var cottageCheeseAmount = 20;
        var cottageCheese = new CottageCheese(name, baseProductAmount, cottageCheeseAmount);

        expect(cottageCheese.getCottageCheeseAmount()).toEqual(cottageCheeseAmount);
        expect(cottageCheese.getBaseProductName()).toEqual(name);
        expect(cottageCheese.getBaseProductAmount()).toEqual(baseProductAmount);
    });

});