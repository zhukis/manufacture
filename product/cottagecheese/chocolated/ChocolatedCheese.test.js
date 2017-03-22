describe("A spec using for checking hierarchy of ChocolatedCheese", function () {

    it("checks if constructor exists", function () {
        var chocolatedCheese = new ChocolatedCheese();

        expect(chocolatedCheese.constructor).toBeDefined();
    });

    it("checks params after creation", function () {
        var name = "Lime";
        var baseProductAmount = 200;
        var cottageCheeseAmount = 50;
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

    it("checks amount of input product (min value)", function () {
        var name = "Lime";
        var baseProductAmount = 200;
        var cottageCheeseAmount = 100;
        var chocolatedCheeseAmount = 3;

        var f = function () {
            var chocolatedCheese = new ChocolatedCheese(name,
                baseProductAmount,
                cottageCheeseAmount,
                chocolatedCheeseAmount);
        };

        expect(f).toThrow();
    });

    it("checks amount of input product (max value)", function () {
        var name = "Lime";
        var baseProductAmount = 200;
        var cottageCheeseAmount = 100;
        var chocolatedCheeseAmount = 300000000;

        var f = function () {
            var chocolatedCheese = new ChocolatedCheese(name,
                baseProductAmount,
                cottageCheeseAmount,
                chocolatedCheeseAmount);
        };

        expect(f).toThrow();
    });

});