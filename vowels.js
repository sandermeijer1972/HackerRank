// First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in 
// the same order as it appeared in .
// Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .
// Function Description

// Complete the vowelsAndConsonants function in the editor below.

// vowelsAndConsonants has the following parameters:

// string s: the string to process
// Prints

// Print each vowel of  in order on a new line, then print each consonant in order on a new line. Return nothing.
// Input Format

// There is one line of input with the string .

// Output Format

// First, print each vowel in  on a new line (in the same order as they appeared in ). Second, print each consonant 
// (i.e., non-vowel) in  on a new line (in the same order as they appeared in ).


function vowelsAndConsonants(s) {
    const vowels = [];
    const consonants = [];
    for(i=0; i<s.length; i++) {
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            vowels.push(s[i]);
        } else {
            consonants.push(s[i]);
        };
    };
    for(vow=0; vow<vowels.length; vow++) {
        console.log(vowels[vow]);
    };
    for(cons=0; cons<consonants.length; cons++) {
        console.log(consonants[cons]);
    };
};

vowelsAndConsonants("hoppa");
vowelsAndConsonants("javascriptloops");
