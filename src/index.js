module.exports = function toReadable(number) {
    textBase = {
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
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',

    }
    function min(a) {
        if (a < 10) return textBase[a]
    };
    function med(b) {
        if (b > 19 && b % 10 != 0) return textBase[Math.floor(b / 10) * 10] + ' ' + textBase[b % 10]
        else return textBase[b];
    }
             

    if (number < 10) return min(number)
    else if (number < 100) return med(number)
    else if (number % 100 != 0) return textBase[Math.floor(number / 100)] + ' hundred ' + med(number % 100)
    else return textBase[Math.floor(number / 100)] + ' hundred'
}
