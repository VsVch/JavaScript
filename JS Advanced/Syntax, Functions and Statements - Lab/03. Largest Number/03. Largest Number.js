function theBgestNumbers(firstNumer, secondNumber, thirdNumber){
    let theBgestNumber;
    if(firstNumer> secondNumber && firstNumer> thirdNumber){
        theBgestNumber = firstNumer;
    }
    else if(secondNumber>firstNumer && secondNumber > thirdNumber){
        theBgestNumber = secondNumber
    }
    else{
        theBgestNumber = thirdNumber
    }
     console.log('The largest number is ' + theBgestNumber +'.');
}
theBgestNumbers(1,2,3)