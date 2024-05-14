const leapYears = function(year) {
    
    // divisible by 4 and 400, divisible by 100 not leap year. 
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) {
        return true;
    }
    return false
};

// Do not edit below this line
module.exports = leapYears;
