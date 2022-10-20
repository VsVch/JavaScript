function solve(x1, y1, x2, y2){

    function GetResult(x1, y1, x2, y2){
        const distance = Math.sqrt((x2-x1)**2 + (y2-y1)**2);

        return  Number.isInteger(distance) ? 'valid' : 'invalid';
    }

    return `{${x1}, ${y1}} to {0, 0} is ${GetResult(x1, y1, 0, 0)}`+`\n`+
           `{${x2}, ${y2}} to {0, 0} is ${GetResult(0, 0, x2, y2)}`+`\n`+
           `{${x1}, ${y1}} to {${x2}, ${y2}} is ${GetResult(x1, y1, x2, y2)}`;

}
console.log(solve(3, 0, 0, 4));
console.log(solve(2, 1, 1, 1));

function validityChecker(x1, y1, x2, y2){
    function result(x1, y1, x2, y2){
        const distanceBetwiPoints = Math.sqrt((x2-x1)**2 + (y2-y1)**2);
        return Number.isInteger(distanceBetwiPoints) ? 'valid' : 'invalid';
    }
    return `{${x1}, ${y1}} to {0, 0} is ${result(x1, y1, 0, 0)}` + '\n' + 
            `{${x2}, ${y2}} to {0, 0} is ${result(0, 0, x2, y2)}` + '\n' + 
            `{${x1}, ${y1}} to {${x2}, ${y2}} is ${result(x1, y1, x2, y2)}`

}
console.log(validityChecker(3, 0, 0, 4))