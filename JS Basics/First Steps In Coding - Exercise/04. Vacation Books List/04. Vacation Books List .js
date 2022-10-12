function vacationBookList (input)
{

    let num = Number(input[0]);
    let numPerDay = Number(input[1]);
    let days = Number(input[2]);
    let time = num / numPerDay;
    time = time / days;
    console.log(`${time}`);
}
vacationBookList(["212 ", "20 ", "2 "]);