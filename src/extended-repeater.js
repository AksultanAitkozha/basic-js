module.exports = function repeater(str, options) {

    let resultArray = [];
    let additionalArray = [];

    for (let i = 0; i < (options.additionRepeatTimes || 1); i++) {

        additionalArray.push(options.hasOwnProperty('addition') ? String(options.addition) : '');
    }

    let additionalString = additionalArray.join(options.additionSeparator || '|');

    for (let i = 0; i < (options.repeatTimes || 1); i++) {
        resultArray.push(str + additionalString);
    }

    return resultArray.join(options.separator || '+');
};
  
