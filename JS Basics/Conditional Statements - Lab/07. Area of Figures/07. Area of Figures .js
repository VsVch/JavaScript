function areaOfFigures (input) {
    let fig = input[0];
    let area = 0;
    if (fig == "square") {
        let a = Number(input[1]);
        area = a * a;
    }
    else if (fig == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    }
    else if (fig == "circle") {
        let r = Number(input[1]);
        area = (r * r * Math.PI);
    }
    else if (fig == "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = a * h / 2;
    }
    console.log(area.toFixed(3));
}
areaOfFigures(["triangle",
"4.5",
"20"]);