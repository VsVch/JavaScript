function solve(input) {

    let output = [];

    while(input.length){

        let hero = input.shift();
        let [name, level, itemsString] = hero.split(' / ');
        level = Number(level);
        const items = itemsString ? itemsString.split(', ') : [];

        output.push({name, level, items});

    }

    return JSON.stringify(output);

}

console.log(solve(
    ['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
));

