function worldSwimmingRecord (input) {
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timeForOneMetres = Number(input[2]);

    let letter = Math.floor(distance / 15);
    //console.log(letter);
    letter = letter*12.5 + distance * timeForOneMetres;
    if (record <= letter) {
        console.log(`No, he failed! He was ${(letter - record).toFixed(2)} seconds slower.`);
    }
    else {
        console.log(`Yes, he succeeded! The new world record is ${letter.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord((["55555.67",
"3017",
"5.03"])

);