

function createFormatter(separator, symbol, symbolFirst, currencyFormatter) {
    let formatter = function(value) {
        return currencyFormatter(separator, symbol, symbolFirst, value);
    }
    return formatter;
}
let dollarFormatter = createFormatter(',', '$', true, currencyFormatter);
console.log(dollarFormatter(5345));
