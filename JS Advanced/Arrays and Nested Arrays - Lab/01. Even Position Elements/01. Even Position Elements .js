function evenPosition(initinalArray) {

    const evenArray = [];

    for (let i = 0; i < initinalArray.length; i++) {

        if(i % 2 == 0){
            evenArray.push(initinalArray[i]);

        }

    }
    return evenArray.join(' ');
}

console.log(evenPosition(['20', '30', '40', '50', '60']));
console.log(evenPosition(['5', '10']));