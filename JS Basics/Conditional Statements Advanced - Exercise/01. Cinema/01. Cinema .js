function cinema (input)
{
    let kind = input[0];
    let r = Number(input[1]);
    let k = Number(input[2]);
    let income = 0;
    switch (kind)
    {
        case "Premiere":
            income = k * r * 12;
            console.log(`${income.toFixed(2)} leva`);
            break;
            case "Normal":
                income = k * r * 7.5;
            console.log(`${income.toFixed(2)} leva`);
                break;
                case "Discount":
                    income = k * r * 5;
            console.log(`${income.toFixed(2)} leva`);
                    break;
    }
}
cinema((["Premiere",
"10",
"12"])
);