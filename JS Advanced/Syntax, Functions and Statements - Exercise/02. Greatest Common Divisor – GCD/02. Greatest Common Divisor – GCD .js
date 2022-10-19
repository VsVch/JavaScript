function commonDivisor(firstNumber, secondNumber){
    if(secondNumber){
        return commonDivisor (secondNumber, firstNumber % secondNumber)
        
    }else {
        console.log(firstNumber);
    }


}
commonDivisor(15, 5);