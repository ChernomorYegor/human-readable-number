module.exports = function toReadable(number) {
    const strNumber = number.toString();

    const digits = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
    }

    const doubleDigitToTwenty = {
        1: 'eleven',
        2: 'twelve',
        3: 'thirteen',
        4: 'fourteen',
        5: 'fifteen',
        6: 'sixteen',
        7: 'seventeen',
        8: 'eighteen',
        9: 'nineteen',
    }

    const firstDigitsOfTens = {
        1: 'ten',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    }

    let result = '';

    if (strNumber.length === 1) {
        result = digits[strNumber];
    } else if (strNumber.length === 2 ) {
        doubleDigit(strNumber);
    } else if (strNumber.length === 3) {
        const strDoubleDigit = `${strNumber[strNumber.length - 2]}${strNumber[strNumber.length - 1]}`;
        doubleDigit(strDoubleDigit);
        result = `${digits[strNumber[0]]} hundred ${result}`.trim();
    }

    function doubleDigit(strNum) {
        if (strNum > 10 && strNum < 20) {
            result = doubleDigitToTwenty[strNum[strNum.length - 1]];
        } else if (strNum > 0 && !(strNum % 10)) {
            result = firstDigitsOfTens[strNum[strNum.length - 2]];
        } else if ((strNum % 10) && strNum > 20) {
            result = `${firstDigitsOfTens[strNum[strNum.length - 2]]} ${digits[strNum[strNum.length - 1]]}`;
        } else if (strNum[strNum.length - 2] === '0' && !(strNum[strNum.length - 1] === '0')) {
            result = digits[strNum[strNum.length - 1]];
        }
    }

    return result;
}
