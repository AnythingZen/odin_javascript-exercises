const repeatString = function(words, times) {

    if (times <0) {
        return 'ERROR';
    }
    
    let i = 0;
    let combined_word = '';
    
    // Adds in the string based on number of times user input to combine the words.
    while (i < times) {
        combined_word += words;
        i++;
    }
    return combined_word;
};

// Do not edit below this line
module.exports = repeatString;
