function bonusScore (input) {
    let num = Number(input[0]);
    let bonus = 0.0;
    if (num <= 100) {
        bonus = 5;
        
    }
    else if (num > 1000) {
        bonus = num * 0.1;
        
    }
    else {
        bonus = num * 0.2;
        
    }
    if (num % 2 == 0) {
        bonus = bonus + 1;
    }
    if (num % 10 == 5) {
        bonus += 2;
    }
    num = num + bonus;




    console.log(bonus);
    console.log(num);
}
bonusScore(["20"]);