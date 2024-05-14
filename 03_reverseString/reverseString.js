const reverseString = function(word_to_reverse) {
    reversed_word = '';
    
    // using max index, traverse backwards on the word_to_reverse and append it into reversed word.
    for (let i = word_to_reverse.length - 1; i >= 0; i--) {
        reversed_word += word_to_reverse[i];
    }

    return reversed_word;
};

// Do not edit below this line
module.exports = reverseString;
