// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToYen = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInYen = valueInEuro * 127.9;
    //return the dollar value
    return valueInYen;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromEuroToPounds = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInPounds = valueInEuro * 0.8;
    //return the dollar value
    return valueInPounds;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar){
    //first need to find the euro exchange rate from both currencies
    let euroToDollar = 1 / fromEuroToDollar(1);
    let euroToYen = 1 / fromEuroToYen(1);

    //now divide them to get the exchange rate between the two currencies
    let exchangeRate = euroToDollar / euroToYen;

    // convert the given valueInYen to dollars
    let valueInYen = valueInDollar * exchangeRate;

    valueInYen = parseFloat(valueInYen.toFixed(8));

    //return the dollar value
    return valueInYen;
}

// we declare the function with the exact name "fromEuroToDollar"
const fromYenToPounds = function(valueInYen){
    //first need to find the euro exchange rate from both currencies
    let euroToYen = 1 / fromEuroToYen(1);
    let euroToPound = 1 / fromEuroToPounds(1);
    
    //now divide them to get the exchange rate between the two currencies
    let exchangeRate = euroToYen / euroToPound;
    
    // convert the given valueInYen to dollars
    let valueInPounds = valueInYen * exchangeRate;

    valueInPounds = parseFloat(valueInPounds.toFixed(8));

    //return the dollar value
    return valueInPounds;
}


// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// we include fromEuroToDollar here as well because it needs to be exported
module.exports = { sum, fromEuroToDollar, fromYenToPounds, fromDollarToYen }