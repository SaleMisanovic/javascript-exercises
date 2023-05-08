const repeatString = function(phrase,number) {
    let output = "";
    if (number<0) {
        return "ERROR"
    }else{
        for (let i = 0; i < number; i++) {
            output+=phrase;
        }
    }
    return output;
};


// Do not edit below this line
module.exports = repeatString;
