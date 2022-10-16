function summerOutfit (input) 
{
let gradus = Number(input[0]);
let timeOfDay = input[1];
let oufit = '';
let shoes = '';
if (gradus>=10 && gradus<=18)
{
    switch(timeOfDay)
    {
            case "Morning":
                oufit = 'Sweatshirt';
                shoes = 'Sneakers';
            break;
            case "Afternoon":
                oufit = 'Shirt';
                shoes = 'Moccasins';
            break;
            case "Evening":
                oufit = 'Shirt';
                shoes = 'Moccasins';
            break;
    }
    
}
else if (gradus>18 && gradus<=24)
{
    switch(timeOfDay)
    {
            case "Morning":
                oufit = 'Shirt';
                shoes = 'Moccasins';
            break;
            case "Afternoon":
                oufit = 'T-Shirt';
                shoes = 'Sandals';
            break;
            case "Evening":
                oufit = 'Shirt';
                shoes = 'Moccasins';
            break;
    }
}
else if (gradus>=25)
{
    switch(timeOfDay)
    {
            case "Morning":
                oufit = 'T-Shirt';
                shoes = 'Sandals';
            break;
            case "Afternoon":
                oufit = 'Swim Suit';
                shoes = 'Barefoot';
            break;
            case "Evening":
                oufit = 'Shirt';
                shoes = 'Moccasins';
            break;
    }
}

console.log(`It's ${gradus} degrees, get your ${oufit} and ${shoes}.`);
}
summerOutfit((["25",
"Morning"])
);
summerOutfit((["16",
"Morning"])
);