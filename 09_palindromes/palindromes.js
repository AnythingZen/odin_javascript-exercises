const palindromes = function (words) {
    // return char with alphabets only, 
    words = words
    .split('')
    .filter(word => /[a-zA-Z0-9]/.test(word))
    .join('')
    .toLowerCase(); 
    
    let index = words.length;

    for (let i = 0; i < index; i++) {

        if (index - 1 == i) {
            return true;
        }

        else if (words[i] !== words[index - (1 + i)]) {
            return false;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
