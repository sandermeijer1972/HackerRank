// COUNTING SORT

// Je krijgt een array met getallen
// Maak een array met het aantal keren dat de getallen 0, 1, 2, ... 100 voorkomen 

function countingSort(arr) {
    const counted = [];
    for (let i = 0; i < 100; i++) {
        counted.push(0);
    };
    //console.log(counted);
    for (let j = 0; j < arr.length; j++) {
        const num = arr[j];
        const value = counted[num];
        counted.splice(num, 1, value+1);
    };
    console.log(counted);
    return counted;
};

countingSort([71,81,34,24,71,15,21,90,45,76,56,88,45,88,90,43,23,22,21,22,23]);
