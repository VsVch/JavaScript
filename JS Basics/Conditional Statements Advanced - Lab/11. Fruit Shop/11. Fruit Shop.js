function fruitShop (input) {
    let fruit = input[0];
    let day = input[1];
    let qua = input[2];
    let price  = 0;
    switch (fruit) {
        case "banana":
            switch (day) {
                case "Monday":
                    case "Tuesday":
                        case "Wednesday":
                            case "Thursday":
                                case "Friday":
                                    price = 2.5;
                                    price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                    break;
                                    case "Saturday":
                                        case "Sunday":
                                            price = 2.7;
                                            price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                            break;
                                            default :
                                            console.log("error");
                                            break;
            }
            break;
            case "apple":
                switch (day) {
                    case "Monday":
                        case "Tuesday":
                            case "Wednesday":
                                case "Thursday":
                                    case "Friday":
                                        price = 1.2;
                                        price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                        break;
                                        case "Saturday":
                                            case "Sunday":
                                                price = 1.25;
                                                price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                                break;
                                                default :
                                                console.log("error");
                                                break;
                }
            break;
            case "orange":
                switch (day) {
                    case "Monday":
                        case "Tuesday":
                            case "Wednesday":
                                case "Thursday":
                                    case "Friday":
                                        price = 0.85;
                                        price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                        break;
                                        case "Saturday":
                                            case "Sunday":
                                                price = 0.9;
                                                price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                                break;
                                                default :
                                                console.log("error");
                                                break;
                }
            break;
            case "grapefruit":
                switch (day) {
                    case "Monday":
                        case "Tuesday":
                            case "Wednesday":
                                case "Thursday":
                                    case "Friday":
                                        price = 1.45;
                                        price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                        break;
                                        case "Saturday":
                                            case "Sunday":
                                                price = 1.6;
                                                price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                                break;
                                                default :
                                                console.log("error");
                                                break;
                }
            break;
            case "kiwi":
                switch (day) {
                    case "Monday":
                        case "Tuesday":
                            case "Wednesday":
                                case "Thursday":
                                    case "Friday":
                                        price = 2.7;
                                        price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                        break;
                                        case "Saturday":
                                            case "Sunday":
                                                price = 3.0;
                                                price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                                break;
                                                default :
                                                console.log("error");
                                                break;
                }
            break;
            case "pineapple":
                switch (day) {
                    case "Monday":
                        case "Tuesday":
                            case "Wednesday":
                                case "Thursday":
                                    case "Friday":
                                        price = 5.5;
                                        price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                        break;
                                        case "Saturday":
                                            case "Sunday":
                                                price = 5.6;
                                                price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                                break;
                                                default :
                                                console.log("error");
                                                break;
                }
            break;
            case "grapes":
                switch (day) {
                    case "Monday":
                        case "Tuesday":
                            case "Wednesday":
                                case "Thursday":
                                    case "Friday":
                                        price = 3.85;
                                        price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                        break;
                                        case "Saturday":
                                            case "Sunday":
                                                price = 4.2;
                                                price = price * qua;
    console.log(`${price.toFixed(2)}`);
                                                break;
                                                default :
                                                console.log("error");
                                                break;
                }
            break;
            default:
                console.log("error");
                break;
    }
    
}
fruitShop((["kiwi",
"Monday",
"2.5"])

);
