const { expect } = require('chai');
const flowerShop = require('./flowerShop.js');

describe('Flower Shop', () => {
    describe('Test for calcPriceOfFlowers', () => {
       

        it('Check valid parameters', () => {
            expect(flowerShop.calcPriceOfFlowers('string', 3, 3)).to.equal(`You need $9.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 4, 3)).to.equal(`You need $12.00 to buy string!`);
            expect(flowerShop.calcPriceOfFlowers('string', 0, 3)).to.equal(`You need $0.00 to buy string!`);

        });
    });


   

});
