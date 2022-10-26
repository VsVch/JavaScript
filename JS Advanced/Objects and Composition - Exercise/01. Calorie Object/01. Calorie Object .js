function calorieObject(array){
    let output = {};
    for(let i = 0; i < array.length; i += 2){
        output [array[i]] = Number (array[i+1]);
    }
    return output;

}
console.log(calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));