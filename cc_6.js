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

//Task 3: Arrow function. Employee bonus calculation scenario.
const calculateBonus = (salary, performanceRating) => {
    let bonus;

    if (performanceRating === "Excellent") {
        bonus = salary * 0.2;
    }
    else if (performanceRating === "Good") {
        bonus = salary * 0.1;
    }
    else {
        bonus = salary * 0.05;
    }
    return bonus;
};
console.log(calculateBonus(5000, "Excellent"));
console.log(calculateBonus(7000, "Good"));