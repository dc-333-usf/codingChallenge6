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
    let bonus; //declare bonus as undefined

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

//Task 4: Parameters and arguments. Subscription pricing model scenario.
function calculateSubscriptionCost(plan, months, discount = 0) { //create the function to calculate with the parameters, setting the default discount to 0
    let cost; //let cost be undefined
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

//Task 5: Returning values. Currency conversion scenario.
function convertCurrency(amount, exchangeRate) { //declare function
    let amnt = amount * exchangeRate; //write simple multiplication calculation
    return amnt; //return amount
}
console.log(convertCurrency(100, 1.1));
console.log(convertCurrency(250, 0.85)); //test with data

//Task 6: Higher-Order functions. Discount strategy for bulk orders.
let orders = [100, 250, 650, 800, 900]; //declare array of orders
const applyBulkDiscount = (orders, discountFunction) => { //create the higher order function to take the array orders and the discountFunction as arguments
    return orders.map(order => discountFunction(order)); //use the map function to transform the array, apply discountFunction to each iteration
};
let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount); //use the code from the assignment to check if it only applies to orders over 500
console.log(discountedOrders); //log the new array

//Task 7: Closures. Business expense tracker scenario.
function createExpenseTracker() { //create function
    let trackedExpenses = 0; //let tracked expenses start at 0 so we can add to it later
    return function(expense) { //make our current function return another function with parameter expense
        trackedExpenses += expense; //take tracked expense variable (was 0) and add expenses
        return trackedExpenses; //return the updated tracked expenses variable
    };
}
let tracker = createExpenseTracker(); //let tracker call this function inside the other function to add to tracked expenses
console.log(tracker(200)); //tracker gets updated to 200
console.log(tracker(150)); //tracker is now 350 since the other value is already stored