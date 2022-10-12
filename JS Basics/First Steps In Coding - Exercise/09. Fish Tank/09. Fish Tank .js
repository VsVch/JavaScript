function fishTank (input)
{
    let l = Number(input[0]);
    let w = Number(input[1]);
    let h = Number(input[2]);
    let percent = Number(input[3]);
    let obem = l * w * h;
    obem = obem * 0.001;
    obem = obem - obem * percent / 100;
    console.log(`${obem}`);
}
fishTank(["85 ",
"75 ",
"47 ",
"17 "]
);