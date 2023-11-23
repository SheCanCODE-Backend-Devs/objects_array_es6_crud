function currencyConverter(amount, sourceCurrency, targetCurrency) {
    var conversionChoice = sourceCurrency+" to "+targetCurrency;
    console.log(`Exchange choice: ${conversionChoice}`);
    var exchange = "";

    switch (conversionChoice) {
        case "RWF to USD":
            exchange = amount * 0.00081;
            console.log(exchange);
            break;
        case "USD to RWF":
            exchange = amount * 1235.97;
            console.log(exchange);
            break;
        default:
            break;
    }
}

currencyConverter(2000, "USD", "RWF");