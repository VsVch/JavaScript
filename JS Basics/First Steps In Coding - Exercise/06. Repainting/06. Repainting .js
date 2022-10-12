function repainting (input)
{
    let newLon = Number(input[0]);
    let boq = Number(input[1]);
    let razreditel = Number(input[2]);
   
    let hours = Number(input[3]);
    let sum = (newLon + 2) * 1.5+ (boq + boq * 0.1) * 14.5 + (razreditel * 5) + 0.4;
    //console.log(`${sum}`);
    let sumM = sum * 0.3 * hours;
    console.log(`${sum+sumM}`);
}
repainting(["10 ", "11", "4", "8"]);