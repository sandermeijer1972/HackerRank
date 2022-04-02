// MEANDERING ARRAY

// Je krijgt een array met hele getallen
// Zet deze getallen in een volgorde met behulp van een functie meanderingArray
// Het eerste getal moet het hoogste getal zijn
// Het tweede getal is het laagste getal
// Het derde getal is het op 1 na hoogste getal
// Het vierde getal is het op 1 na laagste getal
// Het vijfde getal is het op 2 na hoogste getal
// Het zesde getal is het op 2 na laagste getal
// En zo ga je door tot je alle getallen gehad hebt
// De uitkomst is de juist gesorteerde array met getallen

function meanderingArray(unsorted) {
    const sortedArray = [];
    const unsortedArray = unsorted;
    while (unsortedArray.length >= 2) {
        const highest = Math.max(...unsortedArray);
        const lowest = Math.min(...unsortedArray);
        sortedArray.push(highest);
        sortedArray.push(lowest);
        const indexHigh = unsortedArray.indexOf(highest);
        unsortedArray.splice(indexHigh, 1);
        const indexLowest = unsortedArray.indexOf(lowest);
        unsortedArray.splice(indexLowest, 1);
    };
    if (unsortedArray.length == 1) {
        sortedArray.push(unsortedArray[0]);
    };
    console.log(sortedArray);
    return sortedArray;
};

meanderingArray([5, 2, 7, 8, -2, 25, 25]);
meanderingArray([-27676, 211621, 904304, 161270, -292822, 732004, 860511, -825806, -721722, 536428, -927571, -287004]);
