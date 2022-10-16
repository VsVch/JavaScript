function fishingBoat (input)
{
    let budjet = Number(input[0]);
    let season = input[1];
    let fisher = Number(input[2]);
    let discount = 0;
    let price = 0;

    switch (season)
    {
            case "Spring":
                price = 3000;
                if (fisher<=6)
                {
                    discount = 10;
                }
                else if (fisher>6 && fisher<=11)
                {
                    discount = 15;
                }
                else if (fisher>11)
                {
                    discount = 25;
                }
            break;
            case "Summer":
                price = 4200;
                if (fisher<=6)
                {
                    discount = 10;
                }
                else if (fisher>6 && fisher<=11)
                {
                    discount = 15;
                }
                else if (fisher>11)
                {
                    discount = 25;
                }
            break;
            case "Autumn":
                price = 4200;
                if (fisher<=6)
                {
                    discount = 10;
                }
                else if (fisher>6 && fisher<=11)
                {
                    discount = 15;
                }
                else if (fishingBoat>11)
                {
                    discount = 25;
                }
            break;
            case "Winter":
                price = 2600;
                if (fisher<=6)
                {
                    discount = 10;
                }
                else if (fisher>6 && fisher<=11)
                {
                    discount = 15;
                }
                else if (fisher>11)
                {
                    discount = 25;
                }
            break;
    }

    price = price - price * discount / 100;
    //console.log(price);

    if (fisher % 2 == 0 && (season == "Spring"||season == "Summer"||season == "Winter"))
    {
        discount = 5;
        price = price - price*discount/100;
    }
    //console.log(fisher % 2);
    //price = price - price * discount / 100;
    //console.log(price);
    if (budjet>=price)
    {
        console.log(`Yes! You have ${(budjet - price).toFixed(2)} leva left.`);
    }
    else
    {
        console.log(`Not enough money! You need ${(price - budjet).toFixed(2)} leva.`);
    }

}
fishingBoat((["2000",
"Winter",
"13"])



);