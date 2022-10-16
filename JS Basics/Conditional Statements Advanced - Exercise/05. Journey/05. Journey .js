function journey (input)
{
    let budjet = Number(input[0]);
    let season = input[1];
    let destination = "";
    let kind = "";
    let sum = 0;
    if (budjet<=100) 
    {
        switch (season)
        {
            case "summer":
                destination = "Bulgaria";
                kind = "Camp";
                sum = budjet * 30 / 100;
            break;
            case "winter":
                destination = "Bulgaria";
                kind = "Hotel";
                sum = budjet * 70 / 100;
            break;
        }
    }
    else if (budjet>100&&budjet<=1000)
    {
        switch (season)
        {
            case "summer":
                destination = "Balkans";
                kind = "Camp";
                sum = budjet * 40 / 100;
            break;
            case "winter":
                destination = "Balkans";
                kind = "Hotel";
                sum = budjet * 80 / 100;
            break;
        }
    }
    else if (budjet>1000)
    {
                destination = "Europe";
                kind = "Hotel";
                sum = budjet * 90 / 100;

    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${kind} - ${sum.toFixed(2)}`);

}
journey((["50", "summer"]));