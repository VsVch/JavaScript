function shopping(input) {
    let budjet = Number(input[0]);
    let numVideo = Number(input[1]);
    let numProcesori = Number(input[2]);
    let numRam = Number(input[3]);

    let sum = numVideo * 250;
    let priceProcesor = sum * 0.35;
    priceProcesor = priceProcesor * numProcesori;
    let priceRam = sum * 0.1;
    priceRam = numRam * priceRam;
    sum = sum + priceProcesor + priceRam;
    //console.log(sum);
    if (numVideo > numProcesori) {
        sum = sum - sum * 0.15;
    }

    if (budjet >= sum) {
        console.log(`You have ${(budjet - sum).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(sum - budjet).toFixed(2)} leva more!`);
    }

}
shopping((["920.45",
"3",
"1",
"1"])

);