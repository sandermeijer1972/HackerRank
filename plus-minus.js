// PLUS MINUS

// Maak een functie plusMinus die in een array met getallen kijkt naar het percentage aan positieve en negatieve getallen en het getal 0.
// Als uitkomst geef je die 3 percentages met 6 cijfers achter de komma nauwkeurig.

function plusMinus(arr) {
    const numOfNumbers = arr.length;
    const posNums = [];
    const negNums = [];
    const zeroes = [];
    for (i=0; i<numOfNumbers; i++) {
        if(arr[i] > 0) {
            posNums.push(arr[i]);
        } else if(arr[i] < 0) {
            negNums.push(arr[i]);
        } else {
            zeroes.push(arr[i]);
        };
    };
    const percPos = (posNums.length)/numOfNumbers;
    const percNeg = (negNums.length)/numOfNumbers;
    const percZeroes = (zeroes.length)/numOfNumbers;
    console.log("positief: " + parseFloat(percPos.toFixed(6)));
    console.log("negatief: " + parseFloat(percNeg.toFixed(6)));
    console.log("nulletjes: " + parseFloat(percZeroes.toFixed(6)));
};

plusMinus([-4, 3, -9, 0, 4, 1]);
plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);
