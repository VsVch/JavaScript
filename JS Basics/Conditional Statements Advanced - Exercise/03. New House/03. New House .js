function newHouse(input)
{
let kindFlowers = input[0];
let numFlowers = Number(input[1]);
let budjet = Number(input[2]);
let price = 0;
switch(kindFlowers)
{
        case "Roses":
            price = 5;
            if (numFlowers>80)
            {price = price*0.9;}
        break;
        case "Dahlias":
            price = 3.8;
            if (numFlowers>90)
            {price = price*0.85;}
        break;
        case "Tulips":
            price = 2.8;
            if (numFlowers>80)
            {price = price*0.85;}
        break;
        case "Narcissus":
            price = 3;
            if (numFlowers<120)
            {price = price*1.15;}
        break;
        case "Gladiolus":
            price = 2.5;
            if (numFlowers<80)
            {price = price*1.2;}
        break;
}
price = price * numFlowers;
if(price<=budjet)
{
    console.log(`Hey, you have a great garden with ${numFlowers} ${kindFlowers} and ${(budjet-price).toFixed(2)} leva left.`);
}
else
{
    console.log(`Not enough money, you need ${(price-budjet).toFixed(2)} leva more.`);
}
}
newHouse((["Roses",
"55",
"250"])
);
