// import the function sum from the app.js file
const { sum } = require('./app.js');

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar should be 106.583333333333 yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yen = fromDollarToYen(3.5)

    // if 1 dollar is 106.5833333 yen, then 3.5 dollars should be 373.04166667 (rounded) yen (3.5 * 106.583333333333)
    const expected = 3.5 * 106.583333333333; 
    
    // this is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(373.04166667);
})

test("One yen should be 0.00625488663017983 pounds", function(){
    //import the function from app.js
    const { fromYenToPounds } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPounds(3.5)

    // if 1 yen is 0.00624 pounds, then 3.5 yen should be 0.02189210 (rounded) pounds (3.5 * 0.00625488663017983)
    const expected = 3.5 * 0.00625488663017983; 
    
    // this is the comparison for the unit test
     expect(fromYenToPounds(3.5)).toBe(0.02189210);
})