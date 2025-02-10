//Task 1: Function declaration. Business profit calculation scenario.
function calculateProfit(costPrice, sellingPrice, unitsSold) { //declare the function
    let prft = (sellingPrice - costPrice) * unitsSold; //use the formula given in the assignment
    return prft; //return the calculated profit
}
console.log(calculateProfit(20,30,100)); //log the profit with the test data
console.log(calculateProfit(50,70,200));

//Task 2: Function expression. Sales tax computation.
let calculateSalesTax = function(amount, taxRate) { //declare function using expression
    sTax = amount * taxRate;
    return sTax;
}
console.log(calculateSalesTax(100, 0.07));
console.log(calculateSalesTax(500, 0.1));