function godzillaKong (input) {
    let budjet = Number(input[0]);
    let numStatistics = Number(input[1]);
    let priceDressOne = Number(input[2]);

    let decor = budjet * 0.1;
    let sum = numStatistics * priceDressOne;
    if (numStatistics > 150) {
        sum = sum - sum * 0.1;
    }
    sum = sum + decor;
    if (budjet >= sum) {
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(budjet - sum).toFixed(2)} leva left.`);
    }
    else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(sum - budjet).toFixed(2)} leva more.`);
    }
}
godzillaKong((["9587.88",
"222",
"55.68"])


);