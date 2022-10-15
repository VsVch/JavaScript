function smallShop (input) {
    let product = input[0];
    let town = input[1];
    let num = Number(input[2]);
    let price = 0;
    switch  (product) {
        case "coffee":
            if (town == "Sofia") {
                price = 0.5;
            }
            else if (town == "Plovdiv") {
                price = 0.4;
            }
            else {
                price = 0.45;
            }
            break;
            case "water":
            if (town == "Sofia") {
                price = 0.8;
            }
            else if (town == "Plovdiv") {
                price = 0.7;
            }
            else {
                price = 0.7;
            }
            break;
            case "beer":
            if (town == "Sofia") {
                price = 1.2;
            }
            else if (town == "Plovdiv") {
                price = 1.15;
            }
            else {
                price = 1.1;
            }
            break;
            case "sweets":
            if (town == "Sofia") {
                price = 1.45;
            }
            else if (town == "Plovdiv") {
                price = 1.3;
            }
            else {
                price = 1.35;
            }
            break;
            case "peanuts":
            if (town == "Sofia") {
                price = 1.6;
            }
            else if (town == "Plovdiv") {
                price = 1.5;
            }
            else {
                price = 1.55;
            }
            break;
    }
    price = price * num;
    console.log(price);
}
smallShop((["peanuts",
"Plovdiv",
"1"])

);