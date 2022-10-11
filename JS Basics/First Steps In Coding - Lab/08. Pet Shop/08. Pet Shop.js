function petShop (input)
{

    let numDogs = Number(input[0]);
    let numcats = Number(input[1]);
    console.log(`${(numDogs*2.5+numcats*4)} lv.`);
}
petShop(["5 ", "4 "]);