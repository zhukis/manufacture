describe("A spec using to check creation CottageCheese", function () {

    it("checks if constructor exists", function () {
        var cottageCheese = new CottageCheese();

        expect(cottageCheese.constructor).toBeDefined();
    });

    it("checks params after creation", function () {
        var name = "Lime";
        var baseProductAmount = 200;
        var cottageCheeseAmount = 100;
        var cottageCheese = new CottageCheese(name, baseProductAmount, cottageCheeseAmount);

        expect(cottageCheese.getCottageCheeseAmount()).toEqual(cottageCheeseAmount);
        expect(cottageCheese.getBaseProductName()).toEqual(name);
        expect(cottageCheese.getBaseProductAmount()).toEqual(baseProductAmount);
    });

    it("checks amount of input product (min value)", function () {
        var name = "Lime";
        var baseProductAmount = 300;
        var cottageCheeseAmount = 20;

        var f = function () {
            var cottageCheese = new CottageCheese(name, baseProductAmount, cottageCheeseAmount);
        };

        expect(f).toThrow();
    });

    it("checks amount of input product (max value)", function () {
        var name = "Lime";
        var baseProductAmount = 300;
        var cottageCheeseAmount = 100000;

        var f = function () {
            var cottageCheese = new CottageCheese(name, baseProductAmount, cottageCheeseAmount);
        };

        expect(f).toThrow();
    });

});