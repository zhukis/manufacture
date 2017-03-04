describe("A spec using for checking hierarchy of ChocolatedCheese", function () {

    it("checks if constructor exists", function () {
        var chocolatedCheese = new ChocolatedCheese();

        expect(chocolatedCheese.constructor).toBeDefined();
    });

    it("checks params after creation", function () {
        var name = "Lime";
        var baseProductAmount = 10;
        var cottageCheeseAmount = 20;
        var chocolatedCheeseAmount = 30;
        var chocolatedCheese = new ChocolatedCheese(name,
                                                    baseProductAmount,
                                                    cottageCheeseAmount,
                                                    chocolatedCheeseAmount);

        expect(chocolatedCheese.getBaseProductName()).toEqual(name);
        expect(chocolatedCheese.getBaseProductAmount()).toEqual(baseProductAmount);
        expect(chocolatedCheese.getCottageCheeseAmount()).toEqual(cottageCheeseAmount);
        expect(chocolatedCheese.getChocolatedCheeseAmount()).toEqual(chocolatedCheeseAmount);
    });

});