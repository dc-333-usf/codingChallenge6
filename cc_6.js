//Task 1: Function declaration. Business profit calculation scenario
function calculateProfit(costPrice, sellingPrice, unitsSold) { //declare the function
    let prft = (sellingPrice - costPrice) * unitsSold; //use the formula given in the assignment
    return prft; //return the calculated profit
}
console.log(calculateProfit(20,30,100)); //log the profit with the test data
console.log(calculateProfit(50,70,200));
