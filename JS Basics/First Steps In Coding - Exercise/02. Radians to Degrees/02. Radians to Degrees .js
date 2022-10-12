function radianToDegree (input)
{
    let radian = Number(input[0]);
    console.log(`${radian*180/Math.PI}`);
}
radianToDegree((["3.1416"]));