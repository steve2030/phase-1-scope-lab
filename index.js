// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'John';
// variable customerName is part of the scope chain of upperCaseCustomerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// variable has been declared globally
function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(bestCustomerName) {
  return bestCustomer = bestCustomerName;
}

function changeLeastFavoriteCustomer () {
    return leastFavoriteCustomer = 'steve';
}
