function personalTitles (input) {
    let age = Number(input[0]);
    let mail = input[1];
    if (age >= 16 && mail == "m") {
        console.log("Mr.");
    }
    if (age < 16 && mail == "m") {
        console.log("Master");
    }
    if (age >= 16 && mail == "f") {
        console.log("Ms.");
    }
    if (age < 16 && mail == "f") {
        console.log("Miss");
    }

}
personalTitles((["12",
"f"])
);