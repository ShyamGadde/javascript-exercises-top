const repeatString = function(str, count) {
    let output = "";
    for (let i = 0; i < count; i++) output += str;
    return (count < 0) ? "ERROR" : output;
};

// Do not edit below this line
module.exports = repeatString;
