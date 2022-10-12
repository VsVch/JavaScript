function foodDelivery (input)
{

    let numChiken = Number(input[0]);
    let numFish = Number(input[1]);
    let numvegan = Number(input[2]);
    let sum = numChiken * 10.35 + numFish * 12.4 + numvegan * 8.15;
    let desert = sum * 20 / 100;
    sum = sum + desert + 2.5;
    console.log(`${sum}`);
}
foodDelivery(["2 ",
"4 ",
"3 "]
);