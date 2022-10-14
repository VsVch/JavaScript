function toyShop (input) {
    let priceHolyday = Number(input[0]);
    let numPyzels = Number(input[1]);
    let numDoll = Number(input[2]);
    let numBears = Number(input[3]);
    let numMinions = Number(input[4]);
    let numTracks = Number(input[5]);

    let sum = numPyzels * 2.6 + numDoll * 3 + numBears * 4.1 + numMinions * 8.2 + numTracks * 2;
    if ((numPyzels + numDoll + numBears + numMinions + numTracks) >= 50) {
        sum = sum - sum * 0.25;
    }
    sum = sum - sum * 0.1;
    if  (sum >= priceHolyday) {
        console.log(`Yes! ${(sum-priceHolyday).toFixed(2)} lv left.`);
    }
    else {
        console.log(`Not enough money! ${(priceHolyday-sum).toFixed(2)} lv needed.`);
    }
}
toyShop((["40.8",
"20",
"25",
"30",
"50",
"10"])
);