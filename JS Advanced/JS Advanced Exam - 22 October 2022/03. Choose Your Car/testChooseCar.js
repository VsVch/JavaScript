const { expect } = require('chai');
const chooseYourCar = require('./chooseYourCar.js');

describe('Flower Shop', (type, color, year) => {

    describe('choosingType', () => {
        it('Invalid Year!', () => {
            expect( () => chooseYourCar.choosingType(1890)).to.throw();
            expect( () => chooseYourCar.choosingType(2023)).to.throw();
        });
        it('This type of car is not what you are looking for.', () => {
            expect( () => chooseYourCar.choosingType(Sedan)).to.throw();            
        });
        it('Happy path', () => {
            expect(chooseYourCar.choosingType("Sedan", "red", 2012)).to.equal(`This red Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType("Sedan", "red", 2010)).to.equal(`This red Sedan meets the requirements, that you have.`);
            expect(chooseYourCar.choosingType("Sedan", "red", 2018)).to.equal(`This red Sedan meets the requirements, that you have.`);
        })
        it('No one car good ', () => {
            expect(chooseYourCar.choosingType("Sedan", "blue", 2006)).to.equal(`This Sedan is too old for you, especially with that blue color.`);
            expect(chooseYourCar.choosingType("Sedan", "blue", 2008)).to.equal(`This Sedan is too old for you, especially with that blue color.`);
            expect(chooseYourCar.choosingType("Sedan", "green", 2006)).to.equal(`This Sedan is too old for you, especially with that green color.`);
        });
    });

    describe('brandName', (brands, brandIndex) => {        
        it('Invalid Information!', () => {
            expect( () => chooseYourCar.brandName("BMW", -1)).to.throw();
            expect( () => chooseYourCar.brandName("BMW", 0)).to.throw();
            expect( () => chooseYourCar.brandName("BMW", brandIndex == brands.length)).to.throw();
        });
        
    });

    describe('CarFuelConsumption', (distanceInKilometers, consumptedFuelInLitres) => {
        it('Invalid Information!', () => {
            expect( () => chooseYourCar.choosingType(10, 0)).to.throw();
            expect( () => chooseYourCar.choosingType(0, 10)).to.throw();
            expect( () => chooseYourCar.choosingType(10, "200")).to.throw();
            expect( () => chooseYourCar.choosingType("100", 10)).to.throw();
        });
        it('Car is efficient', () => {
            expect(chooseYourCar.carFuelConsumption(100, 6)).to.equal(`The car is efficient enough, it burns 6.00 liters/100 km.`);
            expect(chooseYourCar.carFuelConsumption(100, 7)).to.equal(`The car is efficient enough, it burns 7.00 liters/100 km.`);
        });
        it('Car is not efficient', () => {
            expect(chooseYourCar.carFuelConsumption(100, 8)).to.equal(`The car burns too much fuel - 8.00 liters!`);
            expect(chooseYourCar.carFuelConsumption(100, 9)).to.equal(`The car burns too much fuel - 9.00 liters!`);
        });
    });

    
});