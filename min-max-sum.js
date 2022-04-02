// MIN MAX SUM

// Je krijgt een array van 5 positieve hele getallen.
// Maak een functie minMaxSum die aan de volgende eisen voldoet:
// - Tel de 4 laagste getallen bij elkaar op
// - Tel de 4 hoogste getallen bij elkaar op
// - De uitkomst is een regel met daarin de laagste som, een spatie en dan de hoogste som

function minMaxSum(arr) {
    const totalSums = [];
    const notOne = arr[1] + arr[2] + arr[3] + arr[4];
    totalSums.push(notOne);
    const notTwo = arr[0] + arr[2] + arr[3] + arr[4];
    totalSums.push(notTwo);
    const notThree = arr[0] + arr[1] + arr[3] + arr[4];
    totalSums.push(notThree);
    const notFour = arr[0] + arr[1] + arr[2] + arr[4];
    totalSums.push(notFour);
    const notFive = arr[0] + arr[1] + arr[2] + arr[3];
    totalSums.push(notFive);
    const minSums = Math.min(...totalSums);
    const maxSums = Math.max(...totalSums);
    console.log(minSums + " " + maxSums);
};

minMaxSum([1, 2, 3, 4, 5]);
minMaxSum([7, 69, 2, 221, 8974]);
