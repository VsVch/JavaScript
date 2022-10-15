function tradeCom (input) {
    let town = input[0];
    let sales = Number(input[1]);
    let price = 0;
    switch (town) 
    {
        case "Sofia":
            if (sales>=0 && sales<=500) 
            {price = 5; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>500&&sales<=1000)
            {price = 7; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>1000&&sales<=10000) 
            {price = 8; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>10000) 
            {price = 12; console.log(`${(sales*price/100).toFixed(2)}`);}
            break;
            case "Varna":
                if (sales>=0 && sales<=500) 
            {price = 4.5; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>500&&sales<=1000)
            {price = 7.5; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>1000&&sales<=10000) 
            {price = 10; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>10000) 
            {price = 13; console.log(`${(sales*price/100).toFixed(2)}`);}
                break;
                case "Plovdiv":
                    if (sales>=0 && sales<=500) 
            {price = 5.5; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>500&&sales<=1000)
            {price = 8; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>1000&&sales<=10000) 
            {price = 12; console.log(`${(sales*price/100).toFixed(2)}`);}
            else if (sales>10000) 
            {price = 14.5; console.log(`${(sales*price/100).toFixed(2)}`);}
            else {console.log('error')};
            break;
            default:
            console.log("error");
            break;
    }
}
tradeCom((["Plovdiv",
"10000.01"])
);