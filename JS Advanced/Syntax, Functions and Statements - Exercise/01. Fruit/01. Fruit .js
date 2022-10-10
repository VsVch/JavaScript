function fruitPrice(fruit, grams, price){
    let klGrams = grams / 1000;
    let money = klGrams * price;

    console.log(`I need $${money.toFixed(2)} to buy ${klGrams.toFixed(2)} kilograms ${fruit}.`);

}
fruitPrice('orange', 2500, 1.80);