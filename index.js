const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
let fare;

function createFareMultiplier(number) {
    return function (fare) {
        return fare * number;
    }
}

const fareDoubler = function(fare) {
   return fare * 2;
}

const fareTripler = function(fare) {
    return fare * 3;
}

function selectDifferentDrivers(drivers, half) {
    if (half === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    } else if (half === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
}