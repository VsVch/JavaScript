function suppliesForSchool (input)
{
    let pens = Number(input[0]);
    let mark = Number(input[1]);
    let preparat = Number(input[2]);
    let discount = Number(input[3]);
    let money = pens * 5.8 + mark * 7.2 + preparat * 1.2;
    money = money - money * discount / 100;
    console.log(`${money}`);
}
suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);