function basketballEquipment (input)
{
    let yersPay = Number(input[0]);
    let kec = yersPay * .6;
    let ekip = kec - kec*.2;
    let boll = ekip / 4;
    let aksesoari = boll / 5;
    let sum = yersPay + kec + ekip + boll + aksesoari;
    console.log(`${sum}`);
}
basketballEquipment(["365 "]);