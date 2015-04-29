// Write your package code here!
roundRielCurrency = function (value) {
     value=parseInt(value);
    var returnValue = 0;
    if (value > 0) {
        returnValue = value % 100 >= 50 ? value + (100 - (value % 100)) : value - (value % 100);
    } else if (value < 0) {
        var absRK = Math.abs(value);
        returnValue = absRK % 100 > 50 ? value - (100 - (absRK % 100)) : value + (absRK % 100);
    }
    return returnValue;

};
