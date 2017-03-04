describe("A spec using to check creation of CoveredChocolatedCheese", function () {

    it("checks if constructor exists", function () {
        var covered = new CoveredChocolatedCheese();

        expect(covered.constructor).toBeDefined();
    });

    it("checks params after creation", function () {
        var name = "Lime";
        var baseProductAmount = 10;
        var cottageCheeseAmount = 20;
        var chocolatedCheeseAmount = 30;
        var coveredCheeseAmount = 40;

        var coveredCheese = new CoveredChocolatedCheese(name,
                                                        baseProductAmount,
                                                        cottageCheeseAmount,
                                                        chocolatedCheeseAmount,
                                                        coveredCheeseAmount);

        expect(coveredCheese.getBaseProductName()).toEqual(name);
        expect(coveredCheese.getBaseProductAmount()).toEqual(baseProductAmount);
        expect(coveredCheese.getCottageCheeseAmount()).toEqual(cottageCheeseAmount);
        expect(coveredCheese.getChocolatedCheeseAmount()).toEqual(chocolatedCheeseAmount);
        expect(coveredCheese.getCoveredChocolatedCheeseAmount()).toEqual(coveredCheeseAmount);
    });

});