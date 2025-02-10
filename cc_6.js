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
const calculateBonus = (salary, performanceRating) => { //create arrow function
    let bonus; //declare bonus with no value

    if (performanceRating === "Excellent") {
        bonus = salary * 0.2; //set condition for performance, then calculate bonus and update bonus variable
    }
    else if (performanceRating === "Good") {
        bonus = salary * 0.1; 
    }
    else {
        bonus = salary * 0.05;
    }
    return bonus; //return the bonus value after it has been through the conditions of the if else
};
console.log(calculateBonus(5000, "Excellent"));
console.log(calculateBonus(7000, "Good")); //test the function with test data

//Task 4: Parameters and arguments. Subscription pricing model
function calculateSubscriptionCost(plan, months, discount = 0) { //create the function to calculate with the parameters, setting the default discount to 0
    let cost; //let cost be nothing
    if (plan === "Basic") {
        cost = 10 * months * ((100 - discount) / 100); //if plan is basic, 10 dollars per month. multipled by the months, multiplied by the discount percent as a whole number
    }
    else if (plan === "Premium") {
        cost = 20 * months * ((100 - discount) / 100); //if plan is premium, 20 dollars a month
    }
    else {
        cost = 50 * months * ((100 - discount) / 100);
    }
    return cost; //return the cost
};
console.log(calculateSubscriptionCost("Basic", 6, 10));
console.log(calculateSubscriptionCost("Premium", 12, 0)); //test cost with test data