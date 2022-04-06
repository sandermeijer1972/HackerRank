// DIAGONAL DIFFERENCE

// Je krijgt een array daarin X arrays met elk x getallen
// Deze getallen kan je in een vierkant zien
// Tel de getallen van de 2 diagonalen bij elkaar op
// De uitkomst is het verschil in de 2 sommen

function diagonalDifference(arr) {
    const nums = arr.length;
    const firstDiag = [];
    const secDiag = [];
    for (let i = 0; i < nums; i++) {
        const numOne = arr[i][i];
        const numTwo = arr[i][nums-1-i];
        firstDiag.push(numOne);
        secDiag.push(numTwo);
    };
    const sumOne = firstDiag.reduce((acc, curr) => acc + curr);
    console.log(sumOne);
    const sumTwo = secDiag.reduce((acc, curr) => acc + curr);
    console.log(sumTwo);
    const difference = Math.abs(sumOne - sumTwo);
    console.log(difference);
    return difference;
};

diagonalDifference([[11,2,4],[4,5,6],[10,8,-12]]);
diagonalDifference([[1,2,3],[4,5,6],[9,8,9]]);
diagonalDifference([[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[25,24,23,22,21]]);
