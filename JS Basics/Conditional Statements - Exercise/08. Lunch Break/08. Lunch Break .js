function lunchBreak (input) {
    let name = input[0];
    let timeSerial = Number(input[1]);
    let timeBreak = Number(input[2]);

    let timeForBreak = timeBreak / 8;
    let timeRest = timeBreak / 4;
    timeBreak = timeBreak - (timeForBreak + timeRest);
    if (timeBreak >= timeSerial) {
        console.log(`You have enough time to watch ${name} and left with ${Math.ceil(timeBreak - timeSerial)} minutes free time.`);
    }
    else {
        console.log(`You don't have enough time to watch ${name}, you need ${Math.ceil(timeSerial - timeBreak)} more minutes.`);
    }
}
lunchBreak((["Teen Wolf",
"48",
"60"])

);