function solve (arr, step){

    

    let result  =arr.filter((el, i)=> i % step == 0);
    return result;
}
console.log(solve(
    ['5',
        '20',
        '31',
        '4',
        '20'],
    2
));
console.log(solve(
    ['dsa',
        'asd',
        'test',
        'tset'],
    2
));
console.log(solve(
    ['1',
        '2',
        '3',
        '4',
        '5'],
    6
));