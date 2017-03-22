describe("A spec using to check creation of CoveredChocolatedCheese", function () {

    it("checks if constructor exists", function () {
        var covered = new CoveredChocolatedCheese();

        expect(covered.constructor).toBeDefined();
    });

    it("checks params after creation", function () {
        var name = "Lime";
        var baseProductAmount = 200;
        var cottageCheeseAmount = 100;
        var chocolatedCheeseAmount = 50;
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

    it("checks amount of input product (min value)", function () {
        var name = "Lime";
        var baseProductAmount = 200;
        var cottageCheeseAmount = 100;
        var chocolatedCheeseAmount = 5;
        var coveredCheeseAmount = 40;

        var f = function () {
            var coveredCheese = new CoveredChocolatedCheese(name,
                baseProductAmount,
                cottageCheeseAmount,
                chocolatedCheeseAmount,
                coveredCheeseAmount);
        };

        expect(f).toThrow();
    });

    it("checks amount of input product (max value)", function () {
        var name = "Lime";
        var baseProductAmount = 200;
        var cottageCheeseAmount = 100;
        var chocolatedCheeseAmount = 5000000000000;
        var coveredCheeseAmount = 40;

        var f = function () {
            var coveredCheese = new CoveredChocolatedCheese(name,
                baseProductAmount,
                cottageCheeseAmount,
                chocolatedCheeseAmount,
                coveredCheeseAmount);
        };

        expect(f).toThrow();
    });

});