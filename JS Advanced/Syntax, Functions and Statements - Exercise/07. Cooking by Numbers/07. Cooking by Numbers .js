function cookingByNumbers(number, com1, com2, com3, com4, com5) {

    let num = Number(number);
    const array = [ com1, com2, com3, com4, com5 ];

    for (let i = 0; i < array.length ; i++) {

        switch (array[i]) {
            case 'chop':
                num /= 2;
                break;
            case 'dice':
                num = Math.sqrt(num);
                break;
            case 'spice':
                num++;
                break;
            case 'bake':
                num *= 3;
                break;
            case 'fillet':
                num *= 0.8;
                break;
        }
        console.log(num);
    }

}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
