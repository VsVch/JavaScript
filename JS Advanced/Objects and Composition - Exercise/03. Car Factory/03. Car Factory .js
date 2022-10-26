
function carFactory(array){
    const { model,
    power,
    color,
    carriage,
    wheelsize} = array;

    function getEngine(power){
        const engine = [
            {power: 90, volume: 1800},
            {power: 120, volume: 2400},
            {power: 200, volume: 3500},
        ].sort((a,b)=> a.power - b.power);        

        return engine.find(e => e.power >= power);
    }
    function carriages(carriage,color){
        return{
            type: carriage,
            color
        }

    }
    function wheels(wheelsize){
        let wheel = Math.floor(wheelsize) % 2 === 0 
        ? Math.floor(wheelsize) - 1 
        : Math.floor(wheelsize);

        return Array(4).fill(wheel, 0, 4);
    }
    return {
        model,
        engine: getEngine(power),
        carriage: carriages(carriage, color),
        wheels: wheels(wheelsize)
    }

}



    console.log(carFactory(
    { model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14 }
    ));