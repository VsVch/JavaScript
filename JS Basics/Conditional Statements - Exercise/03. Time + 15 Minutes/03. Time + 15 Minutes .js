function time15Minutes (input) {

    let hour = Number(input[0]);
    let min = Number(input[1]);
    let sum = hour * 60 + min + 15;
    hour = Math.floor(sum / 60);
    min = sum % 60;
    if (hour == 24) {
        hour = 0
    }
    if (min < 10) {
        console.log(`${hour}:0${min}`);
    }
    else {
        console.log(`${hour}:${min}`);
    }
}
time15Minutes((["1", "46"]));