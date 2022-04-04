// MATCHING STRINGS

// Je krijgt een array met strings en een array met queries
// Tel het aantal keer dat een querie voorkomt in de array met strings
// Als uitkomst krijg je een array met getallen


function matchingStrings(strings, queries) {
    const newArray = [];
    for (let querie = 0; querie < queries.length; querie++) {
        let count = 0;
        for (let string = 0; string < strings.length; string++) {
            if (queries[querie] == strings[string]) {
                count++;
            };
        };
        //console.log(count);
        newArray.push(count);
    };
    console.log(newArray);
    return newArray;
};


matchingStrings(["aba", "baba", "aba", "xzxb"],["aba", "xzxb", "ab"]);
matchingStrings(["def", "de", "fgh"],["de", "lmn", "fgh"]);
matchingStrings(["abcde", "sdaklfj", "asdjf", "na", "basnd", "sdaklfj", "asdjf", "na", "asdjf", "na", "basnd", "sdaklfj", "asdjf"],["abcde", "sdaklfj", "asdjf", "na", "basnd"]);
