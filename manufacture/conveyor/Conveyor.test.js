describe("A spec for checking conveyor", function () {

    it("checks is object valid", function () {
        var item = conveyor(function () {
            return 1;
        }, BaseProduct, CottageCheese);

        expect(item.requiredParamsType.length).toBe(2);

        expect( item() ).toBe(1);
    });

});