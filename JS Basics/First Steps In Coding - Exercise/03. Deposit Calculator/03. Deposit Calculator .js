function depositCalculator (input)
{
    let deposit = Number(input[0]);
    let months = Number(input[1]);
    let yeardegree = Number(input[2]);
    let sum = deposit + months * ((deposit*yeardegree/100)/12);
    console.log(`${sum}`);

}
depositCalculator(["200 ", "3 ", "5.7 "]);
