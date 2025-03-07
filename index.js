// 1. Function to return the first two drivers
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

// 2. Function to return the last two drivers
const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

// 3. Array containing the two functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Higher-order function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

// 5. Function to double a fare
const fareDoubler = createFareMultiplier(2);

// 6. Function to triple a fare
const fareTripler = createFareMultiplier(3);

// 7. Function to select different drivers
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}

// Export the functions if needed (for Node.js environments)
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers,
}; // Code your solution in this file!
