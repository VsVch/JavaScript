function sameNumbers(input){
    let stringInput = input.toString();
    let checker = true;
    let sum = 0;
    let firstNum = 0;

    for(let i = 0; i < stringInput.length; i++){
        let current = Number(stringInput[i]);
        firstNum = Number(stringInput[0]);
        if (firstNum !== current){
            checker = false;
        }
        sum += current;
    }

    console.log(`${checker}`);
    console.log(`${sum}`);

}
sameNumbers(222222);